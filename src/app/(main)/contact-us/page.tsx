import HeroSection from "@/components/contact/HeroSection";
import NewsletterSection from "@/components/home/NewsletterSection";

import React from "react";
import WraperForm from "./WraperForm";
import { Metadata } from "next";

export const metadata:Metadata = {
  title: "Contact Us | Zenora Unisex Salon Satna – Book Appointments & Get Directions",
  description:
    "Get in touch with Zenora Unisex Salon in Satna for appointments, inquiries, grooming consultations, bridal makeup bookings, and salon services. Visit our premium unisex salon located at a prime location in Satna. Connect with our experts today.",
  keywords: [
    "Zenora Unisex Salon Satna contact",
    "Zenora Salon phone number",
    "Zenora Salon address",
    "book salon appointment Satna",
    "contact beauty parlour Satna",
    "salon near me",
    "beauty parlour near me",
    "best salon Satna",
    "bridal makeup near me",
    "hair salon near me",
    "near by me salon",
    "beauty parlour salon",
    "whole body wax",
    "bridal hd make up",
    "wedding makeup",
    "bridal makeup artist near me",
    "skin whitening treatments",
    "Zenora Satna location",
    "premium beauty salon Satna",
    "Zenora Unisex Salon map",
    "hair salons closest to me",
    "bridal makeup charges Satna",
  ]
}

export default function Page() {
  return (
    <div>
      <HeroSection />
      <WraperForm/>
      <NewsletterSection />
    </div>
  );
}
