import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Disney+ Farsi",
  description: "This is the first website Of disney in persian",
};

// in bala tarin va parent tarin ghesmat have website hast

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
