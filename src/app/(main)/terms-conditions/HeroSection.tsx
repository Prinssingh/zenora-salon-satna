"use client"
import pic from "@/assets/hero-section.jpg"

export default function TermsHeroSection() {

  return (
    <div>
      <div className="relative lg:h-[40vh] h-[40vh] flex items-center">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-linear-to-r from-black/90 via-black/70 to-black/50 z-10"></div>
          <img
            src={pic.src}
            alt="Barbershop"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content */}
        <div className="flex inset-1 justify-center items-center w-full">
          {/* Large Background Text */}
          <div className="mt-30">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-white opacity-90 z-20 relative">
              Terms and Conditions
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}
