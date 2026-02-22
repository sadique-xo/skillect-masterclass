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
  openGraph: {
    title: "Skillect Masterclass - Unlock Your Future in Cloud & DevOps",
    description:
      "Free live webinar breaking down AWS & DevOps essentials. Reserve your spot today!",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
