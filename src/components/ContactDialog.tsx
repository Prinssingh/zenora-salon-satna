"use client";

import { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import ContactForm from "./ContactForm";
import { ArrowRight } from "lucide-react";



export default function ContactDialog() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setOpen(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {/* <button className="px-6 py-3 bg-golden text-black font-semibold rounded-xl">
          Get in Touch
        </button> */}
        <div className="pt-8">
          <button className="group lg:w-auto w-full cursor-pointer bg-golden hover:bg-golden/90 text-white px-8 py-3 rounded-lg font-semibold text-base sm:text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-golden/50 flex items-center space-x-3">
            <span>Begin Your Zenora Experience</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
          </button>
        </div>
      </DialogTrigger>

      <DialogContent
        className="
    max-w-3xl
    w-[95vw]
    p-0
    overflow-hidden
    border
    border-golden/20
    rounded-3xl
    bg-[linear-gradient(135deg,#111827_0%,#0f172a_50%,#000000_100%)]
    shadow-[0_0_50px_rgba(245,158,11,0.25)]
    before:absolute
    before:inset-0
    before:bg-[radial-gradient(circle_at_top_right,rgba(245,158,11,0.15),transparent_40%)]
    before:pointer-events-none
  "
      >
        <DialogHeader className="sr-only">
          <DialogTitle>Get in Touch</DialogTitle>
        </DialogHeader>

        <ContactForm onSuccess={() => setOpen(false)} />
      </DialogContent>
    </Dialog>
  );
}
