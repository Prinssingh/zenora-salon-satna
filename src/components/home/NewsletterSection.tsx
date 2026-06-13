"use client";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;
    setStatus("sending");
    if (!email) return toast.error("Please enter your email.");

    setLoading(true);
    const toastId = toast.loading("Subscribing...");

    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        formRef.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );

      toast.success("You're subscribed! ", { id: toastId });
      setEmail("");
      formRef.current.reset();
    } catch (error: any) {
      console.error("EmailJS error:", error);
      toast.error("Failed to subscribe. Please try again.", { id: toastId });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-linear-to-r  from-golden via-golden to-golden p-3  lg:p-12 relative overflow-hidden w-full">
      {/* Subtle pattern background */}
      <div className="absolute inset-0 opacity-10 ">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      <div className="relative  z-10 max-w-4xl mx-auto text-center">
        <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">
         Secure Your Beauty & Grooming Appointment
        </h3>
        <p className="text-gray-700 mb-8">
          Book your next beauty or grooming session with ease and get
          exclusive appointment reminders, styling tips, and Zenora updates
          sent straight to your inbox.
        </p>

         <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="/book"
            className="bg-black/80 hover:bg-black text-white font-bold py-3 px-10 rounded-lg uppercase tracking-wide transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
          >
            Secure Your Appointment
          </a>

          <a
            href="/contact"
            className="bg-white/90 hover:bg-white text-black font-bold py-3 px-10 rounded-lg uppercase tracking-wide transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
          >
            Book Now
          </a>
        </div> 
      </div>
    </div>
  );
}
