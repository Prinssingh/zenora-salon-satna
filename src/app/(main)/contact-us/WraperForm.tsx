'use client'
import dynamic from 'next/dynamic';
import React, { useEffect, useState } from 'react'

const ContactForm = dynamic(() => import("@/components/contact/ContactForm"), {
  ssr: false,
});
export default function WraperForm() {
      const [mounted, setMounted] = useState(false);
      useEffect(() => setMounted(true), []);
      if (!mounted) return null;
  return <ContactForm/>
}
