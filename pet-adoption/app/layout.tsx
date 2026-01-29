import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PawsHome - 宠物领养平台",
  description: "连接待领养宠物与充满爱的家庭，让每个生命都被珍惜。安全可靠的宠物领养平台。",
  keywords: ["宠物领养", "领养猫狗", "宠物救助", "动物福利"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}

