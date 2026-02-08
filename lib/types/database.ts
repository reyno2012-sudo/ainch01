export type UserRole = 'user' | 'publisher' | 'admin'
export type PetType = 'dog' | 'cat' | 'bird' | 'rabbit' | 'other'
export type PetGender = 'male' | 'female' | 'unknown'
export type PetSize = 'small' | 'medium' | 'large'
export type ApplicationStatus = 'pending' | 'approved' | 'rejected' | 'completed'

export interface User {
    id: string
    email: string
    full_name: string | null
    avatar_url: string | null
    role: UserRole
    phone: string | null
    address: string | null
    bio: string | null
    created_at: string
    updated_at: string
}

export interface Pet {
    id: string
    publisher_id: string
    name: string
    type: PetType
    breed: string | null
    age_years: number | null
    age_months: number | null
    gender: PetGender
    size: PetSize | null
    color: string | null
    description: string
    health_info: string | null
    vaccination_status: boolean
    neutered: boolean
    location: string
    adoption_fee: number
    is_adopted: boolean
    images: string[]
    created_at: string
    updated_at: string
    publisher?: User
}

export interface AdoptionApplication {
    id: string
    pet_id: string
    applicant_id: string
    status: ApplicationStatus
    applicant_name: string
    applicant_email: string
    applicant_phone: string
    applicant_address: string
    housing_type: string
    has_yard: boolean
    household_members: number | null
    has_children: boolean
    has_pets_currently: boolean
    current_pets_description: string | null
    previous_pet_experience: string | null
    reason_for_adoption: string
    notes: string | null
    reviewed_at: string | null
    reviewed_by: string | null
    rejection_reason: string | null
    created_at: string
    updated_at: string
    pet?: Pet
    applicant?: User
}

export interface Favorite {
    id: string
    user_id: string
    pet_id: string
    created_at: string
    pet?: Pet
}

export interface Message {
    id: string
    sender_id: string
    recipient_id: string
    pet_id: string | null
    application_id: string | null
    subject: string
    content: string
    is_read: boolean
    created_at: string
    sender?: User
    recipient?: User
    pet?: Pet
}

export interface Database {
    public: {
        Tables: {
            users: {
                Row: User
                Insert: Omit<User, 'created_at' | 'updated_at'>
                Update: Partial<Omit<User, 'id' | 'created_at'>>
            }
            pets: {
                Row: Pet
                Insert: Omit<Pet, 'id' | 'created_at' | 'updated_at'>
                Update: Partial<Omit<Pet, 'id' | 'publisher_id' | 'created_at'>>
            }
            adoption_applications: {
                Row: AdoptionApplication
                Insert: Omit<AdoptionApplication, 'id' | 'created_at' | 'updated_at'>
                Update: Partial<Omit<AdoptionApplication, 'id' | 'pet_id' | 'applicant_id' | 'created_at'>>
            }
            favorites: {
                Row: Favorite
                Insert: Omit<Favorite, 'id' | 'created_at'>
                Update: never
            }
            messages: {
                Row: Message
                Insert: Omit<Message, 'id' | 'created_at'>
                Update: Partial<Omit<Message, 'id' | 'sender_id' | 'recipient_id' | 'created_at'>>
            }
        }
    }
}
