import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { NetlifyIdentityScripts } from "@/components/NetlifyIdentityScripts";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.communityip.org"),
  title: {
    default: "Community IP — Helping Overlooked Inventors Protect Ideas",
    template: "%s | Community IP",
  },
  description:
    "Community IP helps underserved inventors understand intellectual property, connect with support, and take the next step toward protecting their ideas.",
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  openGraph: {
    title: "Community IP — Helping Overlooked Inventors Protect Ideas",
    description:
      "Community IP helps underserved inventors understand intellectual property, connect with support, and take the next step toward protecting their ideas.",
    url: "https://www.communityip.org",
    siteName: "Community IP",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Community IP — Helping underserved inventors obtain intellectual property",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Community IP",
    description:
      "Helping underserved inventors understand and protect their ideas.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen font-sans antialiased">
        <NetlifyIdentityScripts />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
