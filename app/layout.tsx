import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://doctorsarigerme.com"),

  title: {
    default: "Doctor Sarigerme | 24/7 English Speaking Doctor",
    template: "%s | Doctor Sarigerme",
  },

  description:
    "24/7 English speaking doctor in Sarigerme. Hotel doctor, emergency medical care, IV therapy, prescriptions and ambulance service in Sarigerme, Dalaman and Fethiye.",

  keywords: [
    "Doctor near me",
    "English speaking doctor",
    "Doctor Sarigerme",
    "Doctor Dalaman",
    "Doctor Fethiye",
    "Hotel doctor",
    "Emergency doctor",
    "Medical clinic",
    "Walk in clinic",
    "GP near me",
    "Doctor open now",
    "IV drip near me",
    "Food poisoning doctor",
    "Ear infection doctor",
    "Doctor near Dalaman Airport",
    "Tourist doctor",
    "Private doctor",
    "24/7 doctor",
  ],

  verification: {
    google: "lHJfqjqHhRL6Kh_Gy7eDcLCRiErMUWSPZfl4E2n0dAE",
  },

  alternates: {
    canonical: "https://doctorsarigerme.com",
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://doctorsarigerme.com",
    title: "Doctor Sarigerme | 24/7 Emergency Medical Care",
    description:
      "English speaking doctor, hotel doctor, emergency medical care, ambulance service and IV therapy in Sarigerme.",
    siteName: "Doctor Sarigerme",
    images: [
      {
        url: "/ambulance.png",
        width: 1200,
        height: 630,
        alt: "Doctor Sarigerme Emergency Medical Service",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Doctor Sarigerme",
    description:
      "24/7 English speaking doctor, hotel visits, ambulance and emergency medical services.",
    images: ["/ambulance.png"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-video-preview": -1,
      "max-snippet": -1,
    },
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
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