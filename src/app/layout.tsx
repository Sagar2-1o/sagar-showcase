import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Sagar | Computer Science Engineer & Android Developer",
  description:
    "Personal portfolio of Sagar — Computer Science Engineer, Android Developer, and Innovator. Passionate about building scalable applications and solving real-world problems.",
  keywords: [
    "Sagar",
    "portfolio",
    "android developer",
    "computer science",
    "kotlin",
    "software engineer",
  ],
  openGraph: {
    title: "Sagar | Computer Science Engineer & Android Developer",
    description:
      "Personal portfolio of Sagar — Computer Science Engineer, Android Developer, and Innovator.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
