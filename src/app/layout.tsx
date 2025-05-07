import type { Metadata } from "next";
import "./globals.css";
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat',
});

export const metadata: Metadata = {
  title: "Best E-commerce Platform | Buy & Gift",
  description: "Discover and book the best gifting experiences with our e-commerce platform.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={montserrat.variable}>
      <body className={`antialiased font-montserrat`}>
        {children}
      </body>
    </html>
  );
}
