import type { Metadata } from "next";
import "../styles/globals.css";

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
    <html lang="en">
      <body className={`antialiased`}>
        {children}
      </body>
    </html>
  );
}
