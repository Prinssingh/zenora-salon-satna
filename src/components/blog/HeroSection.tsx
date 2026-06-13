import hero from "@/assets/blog/hero.jpg"
export default function HeroSection() {
  return (
    <div>
      <div className="relative lg:h-[40vh] h-[30vh] flex items-center">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/50 z-10"></div>
          <img
            src={hero.src}
            alt="Barbershop"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content */}
        <div className="flex inset-1 justify-center items-center w-full">
          {/* Large Background Text */}
          <div className="lg:mt-30">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold  text-white opacity-90 z-20 relative">
              Blog
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}
