
import AboutSection from "@/components/home/AboutSection";
import BarbershopGallery from "@/components/home/BarbershopGallery";
import BarbershopPricing from "@/components/home/BarbershopPricing";
import BlogNewsSection from "@/components/home/BlogNewsSection";
import ContactUs from "@/components/home/ContactUs";
import HeroSection from "@/components/home/HeroSection";
import ServicesSection from "@/components/home/ServicesSection";
import TeamSection from "@/components/home/TeamSection";
import TestimonialsSlider from "@/components/home/TestimonialsSlider";
import VideoGallery from "@/components/home/VideoGallary";
import ScrollToTopButton from "@/components/ScrollToTopButton";

export default function Home() {
  const FemaleSer: any = null;
  return (
    <>
      {/* Home page */}
      <div className="min-h-screen bg-linear-to-br from-zinc-900 via-neutral-900 to-stone-900 text-white overflow-hidden">
        {/* <Test /> */}
        <HeroSection />
        <AboutSection />
        <ServicesSection FemaleSer={FemaleSer} />
        <TeamSection />
        <BarbershopPricing />
        <BarbershopGallery />
        <TestimonialsSlider />
        <BlogNewsSection />
        <VideoGallery />
        <ContactUs />
        {/* <NewsletterSection /> */}
        <ScrollToTopButton />
      </div>
    </>
  );
}
