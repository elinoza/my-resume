import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const helveticaNeue = localFont({
  src: [
    {
      path: "../public/fonts/HelveticaNeueMedium.otf",
      weight: "400",
    },
    {
      path: "../public/fonts/HelveticaNeueLight.otf",
      weight: "200",
    },
  ],
  variable: "--font-helvetica-neue",
});

export const metadata: Metadata = {
  title: "Hilal Semercioğlu",
  description: "Story of a frontend developer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${helveticaNeue.variable} font-helvetica font-thin`}>
        {children}
      </body>
    </html>
  );
}
