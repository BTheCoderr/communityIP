import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Community IP — IP Access for Every Inventor",
    template: "%s | Community IP",
  },
  description:
    "Community IP helps underserved inventors and entrepreneurs learn about patents, trademarks, and copyrights, and connect with education, mentoring, and support options.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen font-sans antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
