import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";

import SmoothScrollProvider from "@/components/SmoothScrollProvider";
import Footer from "@/components/footer/Footer";
import Script from "next/script";


export const metadata: Metadata = {
  title:
    "Zenora Unisex Salon Satna | Premium Hair, Beauty, Bridal Makeup & Grooming Studio",
  description:
    "Zenora Unisex Salon Satna – a premium luxury salon offering professional haircuts, bridal HD makeup, skincare, whole body waxing, hair spa, men’s grooming, and beauty treatments. With 20+ years of expertise, Zenora delivers style, elegance, and top-tier services for both men and women.",
  metadataBase: new URL("https://zenorasalon.com"),
  keywords: [
    // Brand & Primary
    "zenora salon",
    "zenora unisex salon",
    "zenora satna",
    "zenora unisex salon satna",
    "premium salon satna",
    "luxury salon satna",
    "best salon in satna",
    "beauty parlour in satna",
    "best beauty parlour satna",
    "salon satna",
    "unisex salon satna",
    "professional makeup artist satna",
    "bridal makeup artist satna",

    // Your Provided Keywords
    "beauty parlour near me",
    "beauty parlour salon",
    "best indian makeup artist",
    "body waxes",
    "bridal hd make up",
    "bridal makeup",
    "bridal makeup artist near me",
    "bridal makeup charges",
    "bridal makeup near me",
    "parlour",
    "salon near me",
    "near by me salon",
    "skin whitening treatments",
    "wedding makeup",
    "wedding makeup artist",
    "wedding makeup prices",
    "whole body wax",
    "whole body wax price",
    "hair salons closest to me",
    "hair salon near me",

    // Location + Service Keywords
    "bridal hd makeup satna",
    "wedding makeup satna",
    "hair spa satna",
    "hair smoothing satna",
    "keratin treatment satna",
    "premium waxing satna",
    "facial treatments satna",
    "skin polishing satna",
    "engagement makeup satna",
    "party makeup artist satna",
    "makeup studio satna",
    "hair colouring satna",
    "men grooming salon satna",
    "women beauty salon satna",
    "haircut salon satna",
    "best haircut men satna",
    "whole body waxing satna",

    // Long Tail SEO
    "20 years experience salon satna",
    "luxury grooming studio satna",
    "best makeover studio satna",
    "bridal makeup packages satna",
    "hd bridal makeup artist satna",
    "premium beauty services satna",
    "top rated salon satna",
    "budget friendly salon satna",
    "hair and beauty care satna",
  ],
  openGraph: {
    title:
      "Zenora Unisex Salon Satna – Luxury Haircuts • Bridal Makeup • Beauty & Grooming",
    description:
      "Experience premium grooming at Zenora Unisex Salon Satna. Offering professional haircuts, luxury beauty treatments, bridal makeup, facials, waxing, and hair spa services with 20+ years of expertise.",
    url: "https://zenorasalon.com",
    siteName: "Zenora Unisex Salon",
    images: [
      {
        url: "/og-zenora.png",
        width: 1200,
        height: 630,
        alt: "Zenora Unisex Salon Satna",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zenora Unisex Salon Satna – Style • Elegance • Luxury Grooming",
    description:
      "Zenora Unisex Salon Satna offers luxury hair styling, bridal makeup, beauty treatments, skin care, hair spa, waxing and men's grooming services.",
    images: ["/og-zenora.png"],
  },
  alternates: {
    canonical: "https://zenorasalon.com",
  },
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/android-icon-48x48.png", sizes: "48x48", type: "image/png" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/android-icon-192x192.png", sizes: "192x192", type: "image/png" },
    ],

    apple: [
      { url: "/apple-icon-57x57.png", sizes: "57x57" },
      { url: "/apple-icon-60x60.png", sizes: "60x60" },
      { url: "/apple-icon-72x72.png", sizes: "72x72" },
      { url: "/apple-icon-76x76.png", sizes: "76x76" },
      { url: "/apple-icon-114x114.png", sizes: "114x114" },
      { url: "/apple-icon-120x120.png", sizes: "120x120" },
      { url: "/apple-icon-144x144.png", sizes: "144x144" },
      { url: "/apple-icon-152x152.png", sizes: "152x152" },
      { url: "/apple-icon-180x180.png", sizes: "180x180" },
    ],

    other: [
      {
        rel: "manifest",
        url: "/manifest.json",
      },
      {
        rel: "mask-icon",
        url: "/ms-icon-144x144.png",
        color: "#000000",
      },
    ],
  },
  other: {
    company: "Zenora Unisex Salon",
    founder: "Mr. Shiv Sen",
    cofounder: "Mr. Prince Sen",
    CTO: "Prins Singh",
    developer: "Himanshu Kushwaha",
    "msapplication-TileColor": "#000000",
    "msapplication-TileImage": "/ms-icon-144x144.png",
    "theme-color": "#000000",
  },
};

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  
  
  return (
    <html lang="en">
      <head>
        {/* Google Tag (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-2KJP0QC6BF"
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-2KJP0QC6BF');
        `}
        </Script>

        {/* Microsoft Clarity */}
        <Script id="microsoft-clarity" strategy="afterInteractive">
          {`
        (function(c,l,a,r,i,t,y){
            c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
        })(window, document, "clarity", "script", "ubi0tdaodc");
      `}
        </Script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SmoothScrollProvider />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
