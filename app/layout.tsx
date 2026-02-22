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
        media: "(prefers-color-scheme: light)",
        url: "/images/logo/Icon-White%20Theme.png",
        href: "/images/logo/Icon-White%20Theme.png",
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "/images/logo/Icon-Dark%20Theme.png",
        href: "/images/logo/Icon-Dark%20Theme.png",
      },
    ],
  },
  openGraph: {
    title: "Skillect Masterclass - Unlock Your Future in Cloud & DevOps",
    description:
      "Free live webinar breaking down AWS & DevOps essentials. Reserve your spot today!",
    type: "website",
    siteName: "Skillect",
    images: [
      {
        url: "/images/logo/Logo.png",
        width: 1200,
        height: 630,
        alt: "Skillect Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Skillect Masterclass - Unlock Your Future in Cloud & DevOps",
    description:
      "Free live webinar breaking down AWS & DevOps essentials. Reserve your spot today!",
    images: ["/images/logo/Logo.png"],
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
