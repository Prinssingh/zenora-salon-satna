'use client'
import useScrollToTop from "@/hook/useScrollToTop";
import { Toaster } from "react-hot-toast";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
    useScrollToTop();
  return (
    <section>
      {children}
      <Toaster position="bottom-right"  />
    </section>
  );
}
