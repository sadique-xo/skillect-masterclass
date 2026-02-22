import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Skillect Masterclass - Unlock Your Future in Cloud & DevOps",
  description:
    "Join our free 1-hour live webinar on AWS & DevOps. Learn cloud computing essentials, career trends, and get a step-by-step career kickstart plan.",
  keywords: [
    "AWS",
    "DevOps",
    "Cloud Computing",
    "Free Webinar",
    "Skillect",
    "Career",
  ],
  icons: {
    icon: [
      {
        url: "/images/logo/icon-light.png",
        type: "image/png",
      },
      {
        url: "/images/logo/icon-light.svg",
        type: "image/svg+xml",
      },
      {
        media: "(prefers-color-scheme: light)",
        url: "/images/logo/icon-light.png",
        type: "image/png",
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "/images/logo/icon-dark.png",
        type: "image/png",
      },
    ],
    shortcut: "/images/logo/icon-light.png",
    apple: "/images/logo/icon-light.png",
  },
  openGraph: {
    title: "Skillect Masterclass - Unlock Your Future in Cloud & DevOps",
    description:
      "Free live webinar breaking down AWS & DevOps essentials. Reserve your spot today!",
    type: "website",
    siteName: "Skillect",
    images: [
      {
        url: "/images/skillect-og.webp",
        width: 1200,
        height: 630,
        alt: "Skillect Masterclass",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Skillect Masterclass - Unlock Your Future in Cloud & DevOps",
    description:
      "Free live webinar breaking down AWS & DevOps essentials. Reserve your spot today!",
    images: ["/images/skillect-og.webp"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
