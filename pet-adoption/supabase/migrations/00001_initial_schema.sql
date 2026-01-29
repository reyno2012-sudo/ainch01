-- Create custom types
CREATE TYPE user_role AS ENUM ('user', 'publisher', 'admin');
CREATE TYPE pet_type AS ENUM ('dog', 'cat', 'bird', 'rabbit', 'other');
CREATE TYPE pet_gender AS ENUM ('male', 'female', 'unknown');
CREATE TYPE pet_size AS ENUM ('small', 'medium', 'large');
CREATE TYPE application_status AS ENUM ('pending', 'approved', 'rejected', 'completed');

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Users extended profile table
CREATE TABLE IF NOT EXISTS public.users (
  id UUID REFERENCES auth.users(id) ON DELETE CASCADE PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  full_name TEXT,
  avatar_url TEXT,
  role user_role DEFAULT 'user',
  phone TEXT,
  address TEXT,
  bio TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- Pets table
CREATE TABLE IF NOT EXISTS public.pets (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  publisher_id UUID REFERENCES public.users(id) ON DELETE CASCADE NOT NULL,
  name TEXT NOT NULL,
  type pet_type NOT NULL,
  breed TEXT,
  age_years INTEGER,
  age_months INTEGER,
  gender pet_gender DEFAULT 'unknown',
  size pet_size,
  color TEXT,
  description TEXT NOT NULL,
  health_info TEXT,
  vaccination_status BOOLEAN DEFAULT false,
  neutered BOOLEAN DEFAULT false,
  location TEXT NOT NULL,
  adoption_fee DECIMAL(10, 2) DEFAULT 0,
  is_adopted BOOLEAN DEFAULT false,
  images TEXT[] DEFAULT ARRAY[]::TEXT[],
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- Adoption applications table
CREATE TABLE IF NOT EXISTS public.adoption_applications (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  pet_id UUID REFERENCES public.pets(id) ON DELETE CASCADE NOT NULL,
  applicant_id UUID REFERENCES public.users(id) ON DELETE CASCADE NOT NULL,
  status application_status DEFAULT 'pending',
  
  -- Applicant information
  applicant_name TEXT NOT NULL,
  applicant_email TEXT NOT NULL,
  applicant_phone TEXT NOT NULL,
  applicant_address TEXT NOT NULL,
  
  -- Housing information
  housing_type TEXT NOT NULL, -- apartment, house, etc.
  has_yard BOOLEAN DEFAULT false,
  household_members INTEGER,
  has_children BOOLEAN DEFAULT false,
  
  -- Pet experience
  has_pets_currently BOOLEAN DEFAULT false,
  current_pets_description TEXT,
  previous_pet_experience TEXT,
  
  -- Additional info
  reason_for_adoption TEXT NOT NULL,
  notes TEXT,
  
  reviewed_at TIMESTAMP WITH TIME ZONE,
  reviewed_by UUID REFERENCES public.users(id),
  rejection_reason TEXT,
  
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- Favorites table
CREATE TABLE IF NOT EXISTS public.favorites (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  user_id UUID REFERENCES public.users(id) ON DELETE CASCADE NOT NULL,
  pet_id UUID REFERENCES public.pets(id) ON DELETE CASCADE NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
  UNIQUE(user_id, pet_id)
);

-- Messages table
CREATE TABLE IF NOT EXISTS public.messages (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  sender_id UUID REFERENCES public.users(id) ON DELETE CASCADE NOT NULL,
  recipient_id UUID REFERENCES public.users(id) ON DELETE CASCADE NOT NULL,
  pet_id UUID REFERENCES public.pets(id) ON DELETE SET NULL,
  application_id UUID REFERENCES public.adoption_applications(id) ON DELETE SET NULL,
  subject TEXT NOT NULL,
  content TEXT NOT NULL,
  is_read BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- Create indexes for better query performance
CREATE INDEX IF NOT EXISTS idx_pets_publisher ON public.pets(publisher_id);
CREATE INDEX IF NOT EXISTS idx_pets_type ON public.pets(type);
CREATE INDEX IF NOT EXISTS idx_pets_is_adopted ON public.pets(is_adopted);
CREATE INDEX IF NOT EXISTS idx_pets_location ON public.pets(location);
CREATE INDEX IF NOT EXISTS idx_applications_pet ON public.adoption_applications(pet_id);
CREATE INDEX IF NOT EXISTS idx_applications_applicant ON public.adoption_applications(applicant_id);
CREATE INDEX IF NOT EXISTS idx_applications_status ON public.adoption_applications(status);
CREATE INDEX IF NOT EXISTS idx_favorites_user ON public.favorites(user_id);
CREATE INDEX IF NOT EXISTS idx_favorites_pet ON public.favorites(pet_id);
CREATE INDEX IF NOT EXISTS idx_messages_recipient ON public.messages(recipient_id);
CREATE INDEX IF NOT EXISTS idx_messages_sender ON public.messages(sender_id);

-- Enable Row Level Security
ALTER TABLE public.users ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.pets ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.adoption_applications ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.favorites ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.messages ENABLE ROW LEVEL SECURITY;

-- RLS Policies for users table
CREATE POLICY "Users can view all profiles"
  ON public.users FOR SELECT
  USING (true);

CREATE POLICY "Users can update own profile"
  ON public.users FOR UPDATE
  USING (auth.uid() = id);

CREATE POLICY "Users can insert own profile"
  ON public.users FOR INSERT
  WITH CHECK (auth.uid() = id);

-- RLS Policies for pets table
CREATE POLICY "Anyone can view available pets"
  ON public.pets FOR SELECT
  USING (true);

CREATE POLICY "Publishers can insert own pets"
  ON public.pets FOR INSERT
  WITH CHECK (auth.uid() = publisher_id);

CREATE POLICY "Publishers can update own pets"
  ON public.pets FOR UPDATE
  USING (auth.uid() = publisher_id);

CREATE POLICY "Publishers can delete own pets"
  ON public.pets FOR DELETE
  USING (auth.uid() = publisher_id);

-- RLS Policies for adoption_applications table
CREATE POLICY "Applicants can view own applications"
  ON public.adoption_applications FOR SELECT
  USING (auth.uid() = applicant_id);

CREATE POLICY "Publishers can view applications for their pets"
  ON public.adoption_applications FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM public.pets
      WHERE pets.id = adoption_applications.pet_id
      AND pets.publisher_id = auth.uid()
    )
  );

CREATE POLICY "Users can create applications"
  ON public.adoption_applications FOR INSERT
  WITH CHECK (auth.uid() = applicant_id);

CREATE POLICY "Publishers can update applications for their pets"
  ON public.adoption_applications FOR UPDATE
  USING (
    EXISTS (
      SELECT 1 FROM public.pets
      WHERE pets.id = adoption_applications.pet_id
      AND pets.publisher_id = auth.uid()
    )
  );

-- RLS Policies for favorites table
CREATE POLICY "Users can view own favorites"
  ON public.favorites FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Users can add favorites"
  ON public.favorites FOR INSERT
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can remove own favorites"
  ON public.favorites FOR DELETE
  USING (auth.uid() = user_id);

-- RLS Policies for messages table
CREATE POLICY "Users can view received messages"
  ON public.messages FOR SELECT
  USING (auth.uid() = recipient_id OR auth.uid() = sender_id);

CREATE POLICY "Users can send messages"
  ON public.messages FOR INSERT
  WITH CHECK (auth.uid() = sender_id);

CREATE POLICY "Recipients can update message read status"
  ON public.messages FOR UPDATE
  USING (auth.uid() = recipient_id);

-- Create functions for updated_at triggers
CREATE OR REPLACE FUNCTION public.handle_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create triggers for updated_at
CREATE TRIGGER on_users_updated
  BEFORE UPDATE ON public.users
  FOR EACH ROW
  EXECUTE FUNCTION public.handle_updated_at();

CREATE TRIGGER on_pets_updated
  BEFORE UPDATE ON public.pets
  FOR EACH ROW
  EXECUTE FUNCTION public.handle_updated_at();

CREATE TRIGGER on_applications_updated
  BEFORE UPDATE ON public.adoption_applications
  FOR EACH ROW
  EXECUTE FUNCTION public.handle_updated_at();

-- Create function to handle new user registration
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.users (id, email, full_name, avatar_url)
  VALUES (
    NEW.id,
    NEW.email,
    NEW.raw_user_meta_data->>'full_name',
    NEW.raw_user_meta_data->>'avatar_url'
  );
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Create trigger for new user registration
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW
  EXECUTE FUNCTION public.handle_new_user();
