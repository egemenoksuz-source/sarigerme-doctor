import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://sarigermedoctor.com"),

  title: {
    default: "Sarigerme Doctor | 24/7 English Speaking Doctor & Ambulance",
    template: "%s | Sarigerme Doctor",
  },

  description:
    "24/7 English speaking doctor, emergency medical care, hotel doctor, home visits, IV therapy and ambulance service in Sarigerme, Dalaman, Fethiye and surrounding areas.",

  keywords: [
    "Doctor near me",
    "English speaking doctor",
    "Doctor Fethiye",
    "Doctor Dalaman",
    "Doctor Sarigerme",
    "Hotel doctor",
    "Doctor to hotel",
    "Emergency doctor",
    "Medical clinic",
    "Walk in clinic",
    "GP near me",
    "Doctor open now",
    "IV drip near me",
    "Food poisoning doctor",
    "Ear infection doctor",
    "Pharmacy near me",
    "Doctor near Dalaman Airport",
    "Tourist doctor",
    "Private doctor",
    "24/7 doctor",
    "Doctor Gocek",
    "Doctor Dalyan",
    "Doctor Marmaris",
    "Doctor Ortaca",
    "Doctor Turkey",
    "English doctor Turkey",
    "Emergency medical clinic",
    "Private medical clinic",
    "Doctor hotel visit",
    "Ambulance service",
  ],

  authors: [
    {
      name: "Sarigerme Doctor",
    },
  ],

  creator: "Sarigerme Doctor",

  publisher: "Sarigerme Doctor",

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-video-preview": -1,
      "max-snippet": -1,
    },
  },

  alternates: {
    canonical: "https://sarigermedoctor.com",
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://sarigermedoctor.com",
    title: "Sarigerme Doctor | 24/7 Emergency Medical Care",
    description:
      "English speaking doctor, emergency medical care, ambulance service, hotel doctor and home visits in Sarigerme, Dalaman and surrounding areas.",
    siteName: "Sarigerme Doctor",
    images: [
      {
        url: "/ambulance.png",
        width: 1200,
        height: 630,
        alt: "Sarigerme Doctor",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Sarigerme Doctor",
    description:
      "24/7 English speaking doctor, ambulance and emergency medical services.",
    images: ["/ambulance.png"],
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