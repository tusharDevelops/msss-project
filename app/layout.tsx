import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ["latin"] })

// ✅ Keep all normal metadata here
export const metadata: Metadata = {
  metadataBase: new URL("https://msssrewa.com"),
  title: {
    default: "MSSS - Manav Shiksha Sewa Sansthan | Educational Counseling & Admissions",
    template: "%s | MSSS - Educational Counseling",
  },
  description:
    "MSSS (Manav Shiksha Sewa Sansthan) - Premier educational counseling institute in Rewa, MP. Expert guidance for 150+ programs in Engineering, Medical, Management, Nursing, Pharmacy, Law & more. 18+ years experience, 28,000+ successful placements.",
  keywords: [
    "educational counseling",
    "admission guidance",
    "career counseling",
    "engineering admission",
    "medical admission",
    "MBA admission",
    "nursing admission",
    "pharmacy admission",
    "law admission",
    "MSSS Rewa",
    "Manav Shiksha Sewa Sansthan",
    "Madhya Pradesh education",
    "Prof Pankaj Chaurasiya",
    "NAAC Grade A++ universities",
    "distance education",
    "online education",
    "scholarship guidance",
    "education loan assistance",
  ],
  authors: [{ name: "Prof. Pankaj Kumar Chaurasiya", url: "https://msssrewa.com" }],
  creator: "MSSS - Manav Shiksha Sewa Sansthan",
  publisher: "MSSS Educational Services",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    alternateLocale: ["hi_IN"],
    url: "https://msssrewa.com",
    siteName: "MSSS - Manav Shiksha Sewa Sansthan",
    title: "MSSS - Premier Educational Counseling & Career Guidance Institute",
    description:
      "Expert educational counseling for 150+ programs across Engineering, Medical, Management, Nursing, Pharmacy, Law & more. 18+ years experience, 28,000+ successful student placements.",
    images: [
      {
        url: "/images/msss-logo.png",
        width: 1200,
        height: 630,
        alt: "MSSS - Manav Shiksha Sewa Sansthan Logo",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MSSS - Educational Counseling & Career Guidance",
    description:
      "Expert guidance for 150+ programs. 18+ years experience, 28,000+ successful placements. Engineering, Medical, Management & more.",
    images: ["/images/msss-logo.png"],
    creator: "@msssrewa",
    site: "@msssrewa",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
  category: "Education",
  classification: "Educational Services",
  referrer: "origin-when-cross-origin",
  icons: {
    icon: [
      { url: "images/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "images/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "images/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
    other: [{ rel: "mask-icon", url: "/safari-pinned-tab.svg", color: "#f43f5e" }],
  },
  manifest: "/site.webmanifest",
  alternates: {
    canonical: "https://msssrewa.com",
    languages: {
      "en-IN": "https://msssrewa.com",
      "hi-IN": "https://msssrewa.com?lang=hi",
    },
  },
}

// ✅ Move viewport + theme color here
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f43f5e" },
    { media: "(prefers-color-scheme: dark)", color: "#f43f5e" },
  ],
  colorScheme: "light",
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: "MSSS - Manav Shiksha Sewa Sansthan",
  alternateName: "मानव शिक्षा सेवा संस्थान समिति",
  url: "https://msssrewa.com",
  logo: "https://msssrewa.com/images/msss-logo.png",
  image: "https://msssrewa.com/images/msss-logo.png",
  description:
    "Premier educational counseling institute providing expert guidance for 150+ programs across Engineering, Medical, Management, Nursing, Pharmacy, Law and more.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "NH 7, Near Shree Petrol Pump, Padra",
    addressLocality: "Rewa",
    addressRegion: "Madhya Pradesh",
    postalCode: "486001",
    addressCountry: "IN",
  },
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+91-8319167473",
      contactType: "customer service",
      availableLanguage: ["English", "Hindi"],
    },
    {
      "@type": "ContactPoint",
      telephone: "+91-8120259961",
      contactType: "admissions",
      availableLanguage: ["English", "Hindi"],
    },
  ],
  email: "msssgroup2015@gmail.com",
  founder: {
    "@type": "Person",
    name: "Prof. Pankaj Kumar Chaurasiya",
    jobTitle: "Founder & Director",
    description: "Educational counselor with 18+ years of experience in academic guidance and career counseling",
  },
  foundingDate: "2015",
  numberOfEmployees: "25-50",
  areaServed: ["Madhya Pradesh", "Uttar Pradesh", "Chhattisgarh", "Rajasthan", "India"],
  serviceType: [
    "Educational Counseling",
    "Career Guidance",
    "Admission Assistance",
    "Scholarship Guidance",
    "Document Verification",
    "University Selection",
  ],
  hasCredential: "NAAC Grade A++ University Partners",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    reviewCount: "1250",
    bestRating: "5",
    worstRating: "1",
  },
  sameAs: [
    "https://www.facebook.com/share/19WWXp3nSY/?mibextid=wwXIfr",
    "https://www.instagram.com/pankaj.chaursiya.98?igsh=MWY2bXU0cmM5Z3Vnbg%3D%3D&utm_source=qr",
    "http://www.msssrewa.com",
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <meta name="google-site-verification" content="your-google-verification-code" />
        <meta name="msvalidate.01" content="your-bing-verification-code" />
        <meta name="yandex-verification" content="your-yandex-verification-code" />
        <meta property="business:contact_data:street_address" content="NH 7, Near Shree Petrol Pump, Padra" />
        <meta property="business:contact_data:locality" content="Rewa" />
        <meta property="business:contact_data:region" content="Madhya Pradesh" />
        <meta property="business:contact_data:postal_code" content="486001" />
        <meta property="business:contact_data:country_name" content="India" />
        <meta property="business:contact_data:phone_number" content="+91-8319167473" />
        <meta property="business:contact_data:website" content="https://msssrewa.com" />
        <meta name="geo.region" content="IN-MP" />
        <meta name="geo.placename" content="Rewa, Madhya Pradesh" />
        <meta name="geo.position" content="24.5345678;81.2345678" />
        <meta name="ICBM" content="24.5345678, 81.2345678" />
      </head>
      <body className={inter.className}>
        {children}
        <Toaster />
      </body>
    </html>
  )
}
