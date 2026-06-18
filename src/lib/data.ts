/**
 * ZENORA BARBERSHOP - CENTRALIZED DATA MANAGEMENT
 *
 * This file contains all the data used throughout the Zenora barbershop website.
 * It's organized into logical sections with comprehensive comments for easy maintenance.
 *
 * @author Zenora Development Team
 * @version 1.0.0
 * @lastUpdated 2025-01-27
 */

// ============================================================================
// ICON IMPORTS

// ============================================================================
// import i1 from "@/assets/i1.png";
import i1 from "@/assets/gallery/gallery3.jpeg";
import i4 from "@/assets/gallery/gallery4.webp";
import i2 from "@/assets/gallery/gallery.webp";
import i3 from "@/assets/gallery/gallery1.jpg";
// import i4 from "@/assets/i4.png";
import img1 from "@/assets/blog-details/thumbnail-1.jpg";
import img2 from "@/assets/blog-details/thumbnail-2.jpg";
import img3 from "@/assets/blog-details/thumbnail-3.jpg";
import img4 from "@/assets/blog-details/thumbnail-4.jpg";
import {
  Home,
  Phone,
  Mail,
  Brush,
  Camera,
  Calendar,
  TrendingUp,
  Award,
  Users,
  Package,
  Crown,
  User,
  Grid,
  Building,
  Twitter,
  Facebook,
  UserCog,
  Instagram,
  Wand2,
  Droplet,
  Flower2,
  Palette,
  Info,
  ClipboardList,
  UserCheck,
  AlertTriangle,
  Youtube,
  UserRound,
  UserCircle,
} from "lucide-react";
import {
  Shield,
  Lock,
  Eye,
  Cookie,
  FileText,
  AlertCircle,
  CheckCircle,
} from "lucide-react";
import {
  Scissors,
  Dumbbell,
  Clock,
  Sparkles,
  Smile,
  Zap,
  Star,
  Heart,
  Layout,
  Volume2,
} from "lucide-react";

// ============================================================================
// TYPE IMPORTS
// ============================================================================
import {
  GalleryItem,
  Section,
  Service,
  ServiceCategory,
  TeamMember,
  TimelineEvent,
  PortfolioCategory,
  PortfolioItem,
  Testimonial,
  ContactInfo,
  NavLink,
  ServicePricing,
  Feature,
  Statistic,
  Milestone,
  BlogPost,
  VideoItem,
  HeroStat,
  AboutFeature,
  GalleryImage,
  GalleryStat,
  Comment,
  Brand,
} from "./types";

// ============================================================================
// HOME PAGE DATA
// ============================================================================

/**
 * Service pricing list displayed on the home page
 * Used in pricing sections and service overviews
 */
export const services: ServicePricing[] = [
  { name: "COMBO (CUT + SHAVE)", price: 199 },
  { name: "Vedic Line Diamond", price: 1500 },
  { name: "Olive Oil With Wash", price: 149 },
  { name: "Crystal Body Spa", price: 2500 },
  { name: "Full BODY WAX", price: 6999 },
  { name: "Organic Bride & Groom", price: 1200 },
  { name: "D-TAN (O3+)", price: 199 },
  { name: "Bridal Glow", price: 2200 },
  // { name: "GROOM MATE TOUCH", price: 999 },
  // { name: "Oil with Steam Body Spa", price: 2500 },
  // { name: "AROMA WHITENING", price: 999 },
  // { name: "Premium Body Polish", price: 3000 },
];
export const Femaleservices: ServicePricing[] = [
  { name: "Inverted Blunt Cut", price: 250 },
  { name: "Basic Spa", price: 1000 },
  { name: "Step’s Cut", price: 350 },

  { name: "Anti Dandruff Spa", price: 1200 },
  { name: "Full BODY WAX", price: 6999 },
  { name: "Organic Bride & Groom", price: 1200 },
  { name: "D-TAN (O3+)", price: 199 },
  { name: "Bridal Glow", price: 2200 },
  // { name: "GROOM MATE TOUCH", price: 999 },
  // { name: "Oil with Steam Body Spa", price: 2500 },
  // { name: "AROMA WHITENING", price: 999 },
  // { name: "Premium Body Polish", price: 3000 },
];
export const maleservices: ServicePricing[] = [
  { name: "COMBO (CUT + SHAVE)", price: 199 },
  { name: "ANTI TAN MANICURE", price: 499 },
  { name: "OLIVE OIL WITH WASH", price: 149 },
  { name: "HAIR CUT BABY BOY", price: 69 },
  { name: "HALF LEG WAX", price: 399 },
  { name: "BODY POLISHING", price: 1799 },
  { name: "D-TAN (O3+)", price: 199 },
  { name: "TAN CLEAR", price: 599 },
  // { name: "GROOM MATE TOUCH", price: 999 },
  // { name: "Oil with Steam Body Spa", price: 2500 },
  // { name: "AROMA WHITENING", price: 999 },
  // { name: "Premium Body Polish", price: 3000 },
];

/**
 * Service features highlighted on the home page
 * Used in hero sections and service showcases
 */
export const features: Feature[] = [
  { icon: Scissors, text: "Expert Stylists" },
  { icon: Award, text: "Premium Service" },
  { icon: Clock, text: "5+ Years" },
];

/**
 * Statistics displayed on the home page
 * Used in stats sections and counters
 */
export const stats: Statistic[] = [
  { number: "5K+", label: "Clients" },
  { number: "5+", label: "Experts" },
  { number: "98%", label: "Satisfaction" },
];

/**
 * Customer testimonials for the home page slider
 * Used in testimonials section
 */
export const testimonials: Testimonial[] = [
  {
    text: "Zenora truly redefines hairstyling. Every visit feels personalized, professional, and luxurious. I leave feeling confident and polished every time.",
    author: "kabir shekhawat",
    rating: 5,
    image:""
  },
  {
    text: "An outstanding experience! The attention to detail, skill, and professionalism at Zenora is unmatched. Highly recommended for anyone seeking top-quality hairstyling and beauty services.",
    author: "Ruhi Singh",
    rating: 5,
    image:"" },
  {
    text: "Exceptional service and talented staff. Zenora combines artistry with precision, making every haircut a true transformation. I'll definitely be coming back!",
    author: "Veer Raheja",
    rating: 5,
    image:""},
];

// ============================================================================
// ABOUT PAGE DATA
// ============================================================================

/**
 * Gallery items for the about page portfolio section
 * Showcases salon interiors, stations, and lounge areas
 */


import gallery1 from "@/assets/gallery/gallery1.jpg";
import gallery2 from "@/assets/male/hero1.png";
import gallery5 from "@/assets/gallery/gallery.webp";
import gallery3 from "@/assets/about/watting.png";
import gallery4 from "@/assets/gallery/hero.jpeg";
import lighting from "@/assets/about/lighting.png";

export const galleryItems: GalleryItem[] = [
  {
    id: 1,
    type: "image",
    src: gallery1.src,
    thumbnail: gallery1.src,
    title: "Grand Entrance",
    category: "interiors",
    description: "Our elegant reception area welcomes you with sophistication",
  },
  {
    id: 2,
    type: "image",
    src: gallery2.src,
    thumbnail: gallery2.src,
    title: "Premium Stations",
    category: "stations",
    description: "State-of-the-art grooming stations with luxury seating",
  },
  // {
  //   id: 3,
  //   type: "video",
  //   src: gallery3.src,
  //   thumbnail:
  //     gallery3.src,
  //   title: "Virtual Tour",
  //   category: "interiors",
  //   description: "Take a virtual walkthrough of our facilities",
  // },
  {
    id: 4,
    type: "image",
    src: gallery4.src,
    thumbnail: gallery4.src,
    title: "VIP Lounge",
    category: "lounge",
    description: "Relax in our exclusive waiting area",
  },

  {
    id: 6,
    type: "image",
    src: lighting.src,
    thumbnail: lighting.src,
    title: "Ambient Lighting",
    category: "interiors",
    description: "Carefully curated lighting creates the perfect atmosphere",
  },
  {
    id: 8,
    type: "image",
    src: gallery5.src,
    thumbnail: gallery5.src,
    title: "Master Station",
    category: "stations",
    description: "Our master barbers workspace with premium equipment",
  },
  {
    id: 9,
    type: "image",
    src: gallery3.src,
    thumbnail: gallery3.src,
    title: "Waiting Lounge",
    category: "lounge",
    description: "Comfortable seating with modern amenities",
  },
];

/**
 * Gallery categories for filtering portfolio items
 * Used in the about page gallery filter
 */
export const categories = [
  { id: "all", label: "All", icon: Layout },
  { id: "interiors", label: "Interiors", icon: Sparkles },
  { id: "stations", label: "Stations", icon: Camera },
  { id: "lounge", label: "Lounge", icon: Volume2 },
];

/**
 * Company timeline events for the about page
 * Shows the journey and milestones of Zenora
 */
export const timelineEvents: TimelineEvent[] = [
  {
    year: "2021",
    title: "The Beginning",
    description:
      "Zenora started with a simple mission: to offer refined, luxury grooming for both men and women in a space filled with warmth and comfort",
    icon: Calendar,
  },

  {
    year: "2022",
    title: "Building Trust",
    description:
      "Zenora earned client trust by offering advanced grooming services and high-end luxury products tailored for both men and women.",
    icon: TrendingUp,
  },
  {
    year: "2024",
    title: "Growth & Recognition",
    description:
      "Celebrated for excellence, Zenora rose as a premium unisex salon and expanded with advanced, trend-forward services for men and women.",
    icon: Award,
  },
  {
    year: "2025",
    title: "Present Day",
    description:
      "Zenora has grown into the city’s most trusted unisex space, delivering premium grooming services and classic style with exceptional care.",
    icon: Star,
  },
];

/**
 * Company milestones and achievements
 * Used in stats sections and achievement displays
 */
export const milestones: Milestone[] = [
  { number: "3+", label: "Years Legacy", icon: Clock },
  { number: "50K+", label: "Clients Served", icon: Users },
  { number: "15+", label: "Awards Won", icon: Award },
  { number: "98%", label: "Client Satisfaction", icon: Heart },
];

// ============================================================================
// SERVICES PAGE DATA
// ============================================================================

/**
 * Service categories for the services page
 * Detailed service offerings with pricing and descriptions
 */
import glowingFacialImg from "@/assets/male/washboy.png";
import regularFacialImg from "@/assets/male/facial.png";
import makeupStyleImg from "@/assets/male/makeup.png"; // ✅ ensure this image exists
import pedicureImg from "@/assets/male/padicar.png"; // ✅ ensure this image exists
import dTanImg from "@/assets/male/T-tan.png"; // ✅ ensure this image exists
import imagess from "@/assets/male/maleHero.png";

export const serviceCategoriesMale: ServiceCategory[] = [
  {
    id: 1,
    title: "Hair Styling",
    description:
      "Expert cuts and styles tailored to your personality and lifestyle.",
    services: [
      "Signature Haircut",
      "Style & Wash",
      "Hair Treatment",
      "Consultation",
    ],
    startingPrice: "₹100",
    duration: "20-40 min",
    popular: true,
 
    image: imagess.src,
    gradient: "from-golden/50 to-golden/60",
  },
  {
    id: 2,
    title: "HAIR POLISHING",
    description:
      "Experience a rejuvenating hair treatment that enhances your natural shine and smoothness.",
    services: [
      "Deep Cleansing Facial",
      "Hydrating Mask",
      "Steam & Extraction",
      "Glow Serum Application",
    ],
    startingPrice: "₹349",
    duration: "30-45 min",
    image: glowingFacialImg.src, // ✅ use imported image object
    gradient: "from-pink-400/50 to-yellow-400/60", // ✅ softer gradient
  },
  {
    id: 3,
    title: "Regular Facial",
    description:
      "Luxurious facial treatment to cleanse, nourish, and rejuvenate your skin for a refreshed look.",
    services: [
      "Deep Cleansing",
      "Hydrating Mask",
      "Steam & Extraction",
      "Face Massage",
    ],
    startingPrice: "₹799",
    duration: "40-50 min",
    image: regularFacialImg.src, // ✅ imported image
    gradient: "from-golden/50 to-golden/60",
    popular: true,
  },

  {
    id: 4,
    title: "Makeup & Style",
    description:
      "Professional makeup and styling services tailored for any special occasion or daily elegance.",
    services: [
      "Groom & Event Makeup",
      "Casual & Party Styling",
      "Hair Styling & Blow Dry",
      "Personalized Consultation",
    ],
    startingPrice: "₹999",
    duration: "90-120 min",
    image: makeupStyleImg.src, // ✅ imported image object
    gradient: "from-pink-400/50 to-purple-400/60", // ✅ subtle gradient
  },

  {
    id: 5,
    title: "Pedicure",
    description:
      "Professional pedicure services to refresh and pamper your feet, leaving them soft, smooth, and healthy.",
    services: [
      "Nail Trimming & Shaping",
      "Foot Scrub & Exfoliation",
      "Moisturizing Treatment",
      "Polish Application",
    ],
    startingPrice: "₹499",
    duration: "30-45 min",
    image: pedicureImg.src, // ✅ imported image object
    gradient: "from-blue-400/50 to-green-400/60", // ✅ soft gradient for visual appeal
  },

  {
    id: 6,
    title: "D-TAN",
    description:
      "Detan treatments to remove sun tan and pigmentation, leaving your skin fresh, bright, and rejuvenated.",
    services: [
      "Exfoliation",
      "Detan Pack Application",
      "Massage & Relaxation",
      "Hydrating Finish",
    ],
    startingPrice: "₹149",
    duration: "45-60 min",
    image: dTanImg.src, // ✅ imported image object
    gradient: "from-orange-400/50 to-pink-400/60", // ✅ soft gradient for visual appeal
  },
];

import hairSpaImg from "@/assets/female/hireSpa.png"; // ✅ make sure this image exists
import headMassageImg from "@/assets/female/massage-face.png"; // ✅ make sure this image exists
import schwarzkopfImg from "@/assets/female/exp.png"; // ✅ ensure this image exists
import nailArtImg from "@/assets/female/nil.png"; // ✅ ensure this image exists
import bodyBleachImg from "@/assets/female/bodybleech.png"; // ✅ make sure this image exists
import facialImg from "@/assets/female/facialImage.png"; // ✅ make sure this image exists

export const serviceCategoriesFemale: ServiceCategory[] = [
  {
    id: 1,
    title: "HAIR SPA",
    description:
      "Indulge in a luxurious hair spa treatment that nourishes your scalp, strengthens your hair, and leaves it silky smooth.",
    services: [
      "Scalp Massage",
      "Deep Conditioning Treatment",
      "Hot Oil Therapy",
      "Hair Nourishing Mask",
    ],
    startingPrice: "₹1000",
    duration: "45-60 min",
    popular: true,
    image: hairSpaImg.src, // ✅ imported image object
    gradient: "from-golden/50 to-golden/60", // ✅ visually appealing gradient
  },

  {
    id: 2,
    title: "HEAD MASSAGE",
    description:
      "Relax and rejuvenate with a soothing head massage that relieves stress, improves blood circulation, and promotes healthy hair growth.",
    services: [
      "Aromatherapy Massage",
      "Scalp Pressure Point Massage",
      "Hot Oil Treatment",
      "Stress Relief Therapy",
    ],
    startingPrice: "₹250",
    duration: "30-45 min",
    image: headMassageImg.src, // ✅ imported image object
    gradient: "from-pink-400/50 to-yellow-400/60", // ✅ softer gradient
  },
  {
    id: 3,
    title: "SCHWARZKOPF",
    description:
      "Elegant hair and makeup looks to make your special day truly unforgettable.",
    services: ["Bridal Hair", "Bridal Makeup", "Trial Session", "Draping"],
    startingPrice: "₹2500",
    duration: "120-180 min",
    popular: true,
    image: schwarzkopfImg.src, // ✅ imported image object
    gradient: "from-pink-500 to-golden", // ✅ gradient styling
  },

  {
    id: 4,
    title: "NAIL ART",
    description: "Manicures, pedicures, and nail art designed to perfection.",
    services: [
      "Classic Manicure",
      "Gel Polish",
      "Pedicure Spa",
      "Nail Extensions",
    ],
    startingPrice: "₹500",
    duration: "45-60 min",
    image: nailArtImg.src, // ✅ use imported image object
    gradient: "from-violet-400 to-pink-300", // ✅ soft, feminine gradient
  },

  {
    id: 5,
    title: "BODY BLEECH",
    description: "Glowing skin treatments using premium organic products.",
    services: [
      "Fruit Facial",
      "Detox Facial",
      "Glow Peel",
      "Anti-Ageing Therapy",
    ],
    startingPrice: "₹250",
    duration: "45-60 min",
    image: bodyBleachImg.src, // ✅ use imported image object
    gradient: "from-amber-300 to-rose-400", // ✅ soft gradient
  },

  {
    id: 6,
    title: "FACIAL",
    description: "Relax your body and soul with our soothing spa therapies.",
    services: ["Aromatherapy", "Head Massage", "Body Scrub", "Full Body Spa"],
    startingPrice: "₹500",
    duration: "60-90 min",
    image: facialImg.src, // ✅ use imported image object
    gradient: "from-pink-300 to-golden/60", // ✅ soft gradient
  },
];

/**
 * Team members for the services and about pages
 * Professional staff with their specialties and ratings
 */
import auther11 from "@/assets/Testimonial/auther1.png";
import auther12 from "@/assets/Testimonial/auther2.png";
import auther13 from "@/assets/Testimonial/auther3.png";
import auther14 from "@/assets/Testimonial/auther4.png";

export const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "MR. ANUPAM",
    role: "MASTER BARBER",
    image: auther11.src,
    brushColor: "black",
    rating: 5,
    specialty: "Classic Cuts & Beard Styling",
  },
  {
    id: 2,
    name: "MS. PUSHPA",
    role: "COLOR EXPERT",
    image: auther12.src,
    brushColor: "black",
    rating: 5,
    specialty: "Hair Coloring & Treatments",
  },
  {
    id: 3,
    name: "MR. PRINCE",
    role: "MASTER BARBER",
    image: auther13.src,
    brushColor: "amber",
    rating: 5,
    specialty: "Modern Styles & Fades",
  },
  {
    id: 4,
    name: "MS. VAISHALI",
    role: "SENIOR STYLIST",
    image: auther14.src,
    brushColor: "black",
    rating: 5,
    specialty: "Precision Cuts",
  },
];

// Female section
import female from "@/assets/female/female.png";
import female1 from "@/assets/female/female5.png";
import female2 from "@/assets/female/female3.png";
import female3 from "@/assets/female/female4.png";

export const FemaleSection: TeamMember[] = [
  {
    id: 1,
    name: "GUY C. PULIDO BKS",
    role: "MASTER BARBER",
    image: female.src,
    brushColor: "black",
    rating: 5,
    specialty: "Classic Cuts & Beard Styling",
  },
  {
    id: 2,
    name: "STEVE L. NOLAN",
    role: "COLOR EXPERT",
    image: female1.src,
    brushColor: "black",
    rating: 5,
    specialty: "Hair Coloring & Treatments",
  },
  {
    id: 3,
    name: "EDGAR P. MATHIS",
    role: "MASTER BARBER",
    image: female2.src,
    brushColor: "amber",
    rating: 5,
    specialty: "Modern Styles & Fades",
  },
  {
    id: 4,
    name: "JAMES WILSON",
    role: "SENIOR STYLIST",
    image: female3.src,
    brushColor: "black",
    rating: 5,
    specialty: "Precision Cuts",
  },
];

// Male section
import male from "@/assets/male/male-one.png";
import male1 from "@/assets/male/male-two.png";
import male2 from "@/assets/male/makeup-two.png";
import male3 from "@/assets/male/washboy.png";
export const MaleSection: TeamMember[] = [
  {
    id: 1,
    name: "GUY C. PULIDO BKS",
    role: "MASTER BARBER",
    image: male.src,
    brushColor: "black",
    rating: 5,
    specialty: "Classic Cuts & Beard Styling",
  },
  {
    id: 2,
    name: "STEVE L. NOLAN",
    role: "COLOR EXPERT",
    image: male1.src,
    brushColor: "black",
    rating: 5,
    specialty: "Hair Coloring & Treatments",
  },
  {
    id: 3,
    name: "EDGAR P. MATHIS",
    role: "MASTER BARBER",
    image: male2.src,
    brushColor: "amber",
    rating: 5,
    specialty: "Modern Styles & Fades",
  },
  {
    id: 4,
    name: "JAMES WILSON",
    role: "SENIOR STYLIST",
    image: male3.src,
    brushColor: "black",
    rating: 5,
    specialty: "Precision Cuts",
  },
];
// ============================================================================
// BLOG PAGE DATA
// ============================================================================

/**
 * Blog posts for the blog page
 * Articles about hair trends, styling tips, and industry insights
 */

import blog1 from "@/assets/blog/blog1.png"
import blog2 from "@/assets/blog/blog2.png"
import blog3 from "@/assets/blog/blog3.png"
import blog4 from "@/assets/blog/blog4.png"
import blog5 from "@/assets/blog/blog5.png"
import blog6 from "@/assets/blog/blog6.png"

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    date: "24",
    month: "Nov",
    category: "Beauty Habits",
    title: "5 Beauty Habits That Instantly Boost Your Confidence",
    excerpt: `
Confidence isn’t just about how you feel — it’s also about how you present yourself. The way you take care of your skin, hair, and overall appearance can transform your mood and energy instantly. At our premium unisex salon, we’ve seen how small daily beauty habits can make clients look — and feel — their absolute best.
Here are five simple beauty habits that can help you radiate confidence every single day 👇
    `,
    excerpt2: `
Your skin is the first thing people notice — treat it with care!
Follow a daily routine that includes cleansing, toning, and moisturizing. Don’t skip sunscreen, even on cloudy days. A professional facial once a month helps remove toxins, boost hydration, and restore your glow.
 Salon Tip: Try our Hydra Facial or Brightening Facial for an instant, long-lasting radiance that makeup can’t match.
    `,
    excerpt3: `
Clean, well-kept nails say a lot about your personality. Regular manicure and pedicure sessions remove dead skin, improve blood circulation, and leave your hands and feet soft and healthy.
Salon Tip: Go for a luxury spa manicure once a month — it’s not just self-care, it’s confidence care!
    `,
    excerpt4: `
Looking good isn’t vanity — it’s self-respect. Whether it’s eyebrow threading, waxing, beard styling, or skin clean-ups, regular grooming helps you stay neat, fresh, and confident in every situation.Salon Tip: Men and women both benefit from professional detan or clean-up treatments that reveal smoother, brighter skin.
    `,
    image: blog1.src,
    author: "Prince Sen",
    readTime: "5 min read",
    comment: "20",
  },
  {
    id: 2,
    date: "24",
    month: "Nov",
    category: "Hair Style",
    title: "Hair Style Knowledge: Find the Perfect Look That Defines You",
    excerpt: `
Your hairstyle says more about you than words ever could. Whether you’re walking into a meeting, a wedding, or a weekend brunch — the right hairstyle boosts your confidence and complements your personality. At our premium unisex salon, we believe great hair isn’t just a style — it’s an expression.
Here’s everything you need to know to choose, maintain, and rock your perfect hairstyle.
    `,
    excerpt2: `
1. Know Your Face Shape
    `,
    excerpt3: `
2. Understand Your Hair Type
    `,
    excerpt4: `
3. Stay Updated with Trending Hairstyles
    `,
    image: blog2.src,
    author: "Mr. Shiv Sen",
    readTime: "4 min read",
    comment: "27",
  },
  {
    id: 3,
    date: "22",
    month: "Nov",
    category: "Sking Glow",
    title: "What Order Should I Follow for My Skin Care Routine?",
    excerpt: `
Everyone wants glowing, healthy skin — but the secret isn’t using too many products. It’s using the right products in the right order.If you follow the right steps every day, your skin will start looking cleaner, brighter, and smoother. Our experts at Zenora unsex family salon, have shared a simple routine you can follow at home — for both men and women.
    `,
    excerpt2: `
1. Moisturizer
Now apply a light moisturizer to keep your skin soft all day.
Even if you have oily skin, don’t skip this step — your skin always needs hydration.
    `,
    excerpt3: `
2. Sunscreen
Last but most important — sunscreen!
It protects your skin from sun damage, tanning, and early wrinkles.
Always use one with SPF 30 or higher, even if you’re staying indoors.
    `,
    excerpt4: `
3. Night Skin Care Routine
Your skin repairs itself while you sleep, so your night routine should focus on cleaning and moisturizing.
    `,
    image: blog3.src,
    author: "MS. Pushpa",
    readTime: "6 min read",
    comment: "30",
  },
  {
    id: 4,
    date: "20",
    month: "Nov",
    category: "Skin care",
    title: "Face Wash According to Your Skin Type – Find Your Perfect Match!",
    excerpt: `
Your skin deserves the best care every day, and it all starts with the right face wash. Using the wrong one can make your skin dry, oily, or dull. So, let’s find out which face wash suits your skin type perfectly!
    `,
    excerpt2: `
1. For Oily Skin
If your face feels sticky or shiny most of the time, you have oily skin.
    `,
    excerpt3: `
2. For Dry Skin
If your skin feels tight, flaky, or rough, it’s dry skin.
    `,
    excerpt4: `
3. For Combination Skin
If your T-zone (forehead, nose, chin) is oily but cheeks are dry, you have combination skin.
    `,
    image: blog4.src,
    author: "Mr. Shiv Sen",
    readTime: "5 min read",
    comment: "40",
  },
  {
    id: 5,
    date: "18",
    month: "Nov",
    category: "Skin Treatment",
    title:
      "De-tan and Skin Polishing Treatment: Step-by-Step Guide to Glowing Skin",
    excerpt: `
If your skin looks dull, tanned, or tired due to sun exposure and pollution, a De-tan and Skin Polishing treatment can bring back its natural glow. These treatments are a must-have in every unisex salon, helping both men and women achieve smooth, bright, and healthy skin.Let’s go through the step-by-step process your salon expert follows
    `,
    excerpt2: `
Step 1: Cleansing
The treatment begins with a deep cleanse to remove dirt, oil, and makeup.
    `,
    excerpt3: `
Step 2: Exfoliation (Scrubbing)
A mild exfoliating scrub is applied to remove dead skin cells.
    `,
    excerpt4: `
Step 3: Steam & Blackhead Removal (Optional)
Gentle steam is given to open pores, making blackhead and whitehead removal easier.
    `,
    image: blog5.src,
    author: "Ms. Pushpa",
    readTime: "4 min read",
    comment: "26",
  },
  {
    id: 6,
    date: "15",
    month: "Nov",
    category: "Beard Care",
    title: "Best Lip Shades for Every Skin Tone",
    excerpt: `
Choosing the right lip shade can make your face look brighter, your smile more beautiful, and your confidence even stronger. But with so many lipsticks out there, it can be confusing to find the perfect color that suits your skin tone. Don’t worry! In this blog, we’ll help you pick the best lip shades for every skin tone — fair, medium, and dark — so you can look your best every day.
    `,
    excerpt2: `
1. For Fair Skin Tone
People with fair or light skin usually have cool or pink undertones. The goal is to pick shades that add warmth and colour to your face.
    `,
    excerpt3: `
2. For Medium or Wheatish Skin Tone
Medium or wheatish skin tones are very common in India. This tone looks great with a wide range of lip shades. The key is to choose colors that bring out the natural warmth in your skin.
    `,
    excerpt4: `
3. For Dusky or Dark Skin Tone
Dusky or deep skin tones are naturally bold and beautiful. The best lip shades are those that highlight your lips without overpowering your complexion.
    `,
    image: blog6.src,
    author: "Ms. Vaishali",
    readTime: "6 min read",
    comment: "19",
  },
];

// ============================================================================
// PORTFOLIO PAGE DATA
// ============================================================================

/**
 * Portfolio categories for filtering work samples
 * Used in the portfolio page filter component
 */
export const portfolioCategories: PortfolioCategory[] = [
  { id: "all", label: "All", icon: Grid, count: 8 },
  { id: "mens", label: "Men's Grooming", icon: Users, count: 3 },
  { id: "womens", label: "Women's Styling", icon: Sparkles, count: 3 },
  { id: "bridal", label: "Bridal & Makeup", icon: Crown, count: 2 },
  {
    id: "transformations",
    label: "Hair Transformations",
    icon: TrendingUp,
    count: 2,
  },
];

/**
 * Portfolio items showcasing our work
 * Sample images and descriptions of services provided
 */

import portfoliopic1 from "@/assets/portfolio/portfoliopic1.jpeg";
import portfoliopic2 from "@/assets/portfolio/portfoliopic2.jpeg";
import portfoliopic3 from "@/assets/portfolio/portfoliopic3.jpeg";
import portfoliopic4 from "@/assets/portfolio/portfoliopic4.jpeg";
import portfoliopic5 from "@/assets/portfolio/portfoliopic5.jpeg";
import portfoliopic6 from "@/assets/portfolio/portfoliopic6.jpeg";
import portfoliopic8 from "@/assets/portfolio/portfoliopic8.jpeg";


export const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: "Classic Gentleman Cut",
    category: "mens",
    image: portfoliopic1.src,
    description: "Traditional styling with modern precision",
    tags: ["Haircut", "Beard Trim", "Classic"],
  },
  {
    id: 2,
    title: "Executive Style",
    category: "mens",
    image: portfoliopic2.src,
    description: "Professional grooming for business leaders",
    tags: ["Professional", "Beard", "Premium"],
  },
  {
    id: 3,
    title: "Modern Fade",
    category: "mens",
    image:  portfoliopic3.src,
    description: "Contemporary fade with clean lines",
    tags: ["Fade", "Modern", "Trendy"],
  },
  {
    id: 4,
    title: "Textured Waves",
    category: "womens",
    image: portfoliopic4.src,
    description: "Natural waves with volume and shine",
    tags: ["Waves", "Styling", "Natural"],
  },
  {
    id: 5,
    title: "Elegant Updo",
    category: "womens",
    image: portfoliopic5.src,
    description: "Sophisticated styling for special occasions",
    tags: ["Updo", "Elegant", "Special"],
  },
  {
    id: 6,
    title: "Color Transformation",
    category: "womens",
    image: portfoliopic6.src,
    description: "Stunning color work with balayage",
    tags: ["Color", "Balayage", "Highlights"],
  },
  {
    id: 7,
    title: "Bridal Elegance",
    category: "bridal",
    image:  portfoliopic6.src ,
    description: "Perfect bridal styling for your special day",
    tags: ["Bridal", "Elegant", "Wedding"],
  },
  {
    id: 8,
    title: "Dramatic Transformation",
    category: "transformations",
    image: portfoliopic8.src ,
    description: "Complete style transformation",
    tags: ["Transformation", "Dramatic", "New Look"],
  },
];

// ============================================================================
// CONTACT PAGE DATA
// ============================================================================

/**
 * Contact information for the contact page
 * Address, phone, and email details
 */
export const contactInfo: ContactInfo[] = [
  {
    icon: Home,
    title:
      "1st Floor, Sc. School, Anil studio Building, Rewa Rd, opp. Christ Jyoti Road, Shakti Vihar, Jeevan Jyoti Colony, Satna,",
    subtitle: "Madhya Pradesh 485001",
    color: "text-white",
    bgColor: "bg-golden",
  },
  {
    icon: Phone,
    title: "+91 97534 54519",
    subtitle: "Mon to Fri 9am to 6pm",
    color: "text-white",
    bgColor: "bg-golden",
  },
  {
    icon: Mail,
    title: "contact@zenorasalon.com",
    subtitle: "Send us your query anytime!",
    color: "text-white",
    bgColor: "bg-golden",
  },
];

// ============================================================================
// PRIVACY POLICY DATA
// ============================================================================

/**
 * Privacy policy sections for the privacy policy page
 * Comprehensive privacy information and legal content
 */
export const privacyPolicySections: Section[] = [
  {
    id: "introduction",
    title: "Introduction",
    icon: FileText,
    content: [
      "Welcome to Zenora Unisex Salon. We value your privacy and are committed to protecting your personal information. This Privacy Policy explains what data we collect, how we use it, how it is stored, and how we ensure it remains secure.",
      "This policy applies to all interactions you make through our website, including contacting us or browsing our pages.",
      "By using our website, you agree to the terms outlined in this Privacy Policy and acknowledge that Zenora Unisex Salon prioritizes transparency and data protection.",
    ],
  },

  {
    id: "information-collection",
    title: "Information We Collect",
    icon: Eye,
    content: [
      "Zenora Unisex Salon collects minimal information to provide essential communication and enhance website usability. We only collect what is necessary and do not request sensitive or financial information.",
    ],
    subsections: [
      {
        title: "Contact Form Information",
        content: [
          "Name: Used to identify and address you in communication.",
          "Email Address: Used to respond to your message or inquiry.",
          "Message Content: Your inquiry or details you choose to share.",
        ],
      },
      {
        title: "Analytics Data",
        content: [
          "Google Analytics: Collects anonymized website usage data such as visited pages, time spent, and browser type.",
          "Microsoft Clarity: Records anonymized session insights like clicks and scroll behavior.",
          "No personally identifiable information (PII) is collected by analytics tools.",
        ],
      },
      {
        title: "Information We Do NOT Collect",
        content: [
          "No payment information (no online payments on website).",
          "No login or signup data.",
          "No sensitive personal data such as medical, skin, or health details.",
          "No location tracking.",
          "No offline or onsite customer data storage.",
        ],
      },
    ],
  },

  {
    id: "how-we-use",
    title: "How We Use Your Information",
    icon: CheckCircle,
    content: [
      "Zenora Unisex Salon uses your information responsibly and solely for communication, service improvement, and website analytics.",
    ],
    subsections: [
      {
        title: "Communication",
        content: [
          "To respond to inquiries submitted through the contact form.",
          "To send service-related updates when necessary.",
        ],
      },
      {
        title: "Website Improvement",
        content: [
          "To analyze website performance and user behavior using Google Analytics and Microsoft Clarity.",
          "To fix usability issues and enhance user experience.",
          "To monitor traffic, loading speeds, and errors.",
        ],
      },
      {
        title: "Future Features",
        content: [
          "If online appointment booking is introduced in the future, additional data may be collected.",
          "Any new data collection will be included in an updated version of this Privacy Policy.",
        ],
      },
    ],
  },

  {
    id: "data-sharing",
    title: "Data Sharing and Disclosure",
    icon: Lock,
    content: [
      "Zenora Unisex Salon does not share, sell, or trade your personal information with any third party. Your privacy is our priority.",
    ],
    subsections: [
      {
        title: "Third-Party Services",
        content: [
          "Google Analytics and Microsoft Clarity may process anonymized usage data for website performance insights.",
          "No personal identification data is shared with these platforms.",
        ],
      },
      {
        title: "Legal Requirements",
        content: [
          "We may disclose information if required by law, regulation, or legal process.",
          "We may act to protect the rights, safety, or property of Zenora Unisex Salon.",
        ],
      },
      {
        title: "Your Consent",
        content: [
          "We will only share your information for any other purpose if you explicitly consent.",
          "You may withdraw your consent at any time.",
        ],
      },
    ],
  },

  {
    id: "cookies",
    title: "Cookies and Tracking",
    icon: Cookie,
    content: [
      "Our website uses cookies to improve browsing experience and gather analytics insights. Cookies help us understand visitor behavior and enhance website functionality.",
    ],
    subsections: [
      {
        title: "Types of Cookies",
        content: [
          "Essential Cookies: Required for the website to function properly.",
          "Analytics Cookies: Help track anonymized usage patterns.",
          "Preference Cookies: Store user preferences for a smoother experience.",
        ],
      },
      {
        title: "Managing Cookies",
        content: [
          "You can disable cookies in your browser settings.",
          "Disabling cookies may affect certain website features.",
          "Zenora does not force any cookie acceptance and respects your browser preferences.",
        ],
      },
    ],
  },

  {
    id: "your-rights",
    title: "Your Rights",
    icon: AlertCircle,
    content: [
      "Zenora Unisex Salon respects your rights regarding your personal data and ensures transparency in all data-handling practices.",
    ],
    subsections: [
      {
        title: "Access and Updates",
        content: [
          "You may request to know what personal information we have collected.",
          "You may request updates or corrections to your contact details.",
        ],
      },
      {
        title: "Data Deletion",
        content: [
          "You may request deletion of your contact form submissions.",
          "We will delete your data unless legal requirements prevent it.",
        ],
      },
      {
        title: "Opt-Out",
        content: [
          "You may opt-out of receiving any communication from us.",
          "You may restrict analytics tracking using your browser settings.",
        ],
      },
    ],
  },

  {
    id: "children",
    title: "Children's Privacy",
    icon: Shield,
    content: [
      "Zenora Unisex Salon does not knowingly collect personal information from children below the age of 13.",
      "If a parent or guardian believes a minor has submitted information, they may contact us for immediate removal.",
    ],
  },

  {
    id: "changes",
    title: "Changes to This Policy",
    icon: AlertCircle,
    content: [
      "Zenora Unisex Salon may revise this Privacy Policy from time to time based on new features or legal guidelines.",
      "The 'Last Updated' date will be updated whenever changes occur.",
      "Continued use of the website after changes indicates acceptance of the updated policy.",
    ],
  },
];

export const termsAndConditionsSections: Section[] = [
  {
    id: "introduction",
    title: "Introduction",
    icon: FileText,
    content: [
      "Welcome to Zenora Unisex Salon’s official website. By accessing or using our website or engaging with our services, you agree to comply with these Terms & Conditions.",
      "These terms establish the rules, responsibilities, and limitations governing your usage of Zenora's website and salon services.",
      "If you do not agree with these terms, we request that you discontinue using the website immediately.",
    ],
  },

  {
    id: "services",
    title: "Services Offered",
    icon: CheckCircle,
    content: [
      "Zenora Unisex Salon offers grooming, hair styling, skin, beauty, and personal care services for men and women.",
      "All services are subject to availability, staffing schedules, and salon operating hours.",
      "Prices mentioned online or offline may change based on product usage, hair length, skin/service type, or special conditions.",
    ],
  },

  {
    id: "bookings",
    title: "Appointments & Bookings",
    icon: ClipboardList,
    content: [
      "Appointment-based service bookings will be introduced in the future.",
      "For now, customers may visit directly or contact us through phone or email to check availability.",
      "Zenora reserves the right to accept or decline appointments based on availability and operational feasibility.",
    ],
    subsections: [
      {
        title: "Cancellations",
        content: [
          "If appointment booking starts in the future, cancellation rules will be updated.",
          "Zenora may cancel or reschedule a booking due to emergencies, staff unavailability, or unavoidable circumstances.",
        ],
      },
    ],
  },

  {
    id: "pricing",
    title: "Pricing & Payments",
    icon: Info,
    content: [
      "All prices for services are subject to change at Zenora's discretion.",
      "The website does not currently support online payments.",
      "Payments for salon services must be made at the salon through accepted offline payment methods.",
      "Any promotional prices, offers, or discounts may be revised or withdrawn without notice.",
    ],
  },

  {
    id: "customer-responsibilities",
    title: "Customer Responsibilities",
    icon: UserCheck,
    content: [
      "Customers must provide accurate details when filling out contact forms.",
      "Customers are expected to follow grooming preparation guidelines (if any) provided by our specialists.",
      "Any allergies, sensitivities, or concerns regarding products or procedures must be communicated before availing services.",
    ],
  },

  {
    id: "conduct",
    title: "Code of Conduct",
    icon: Shield,
    content: [
      "Zenora maintains a respectful, professional, and premium environment for all visitors.",
      "Any abusive, inappropriate, or disruptive behavior will not be tolerated and may result in refusal of service.",
      "Customers must respect staff, equipment, and salon property at all times.",
    ],
  },

  {
    id: "intellectual-property",
    title: "Intellectual Property",
    icon: Lock,
    content: [
      "All content on this website — including images, graphics, text, logos, branding, and portfolio media — is the exclusive property of Zenora Unisex Salon.",
      "Unauthorized use, reproduction, or distribution of content is strictly prohibited.",
      "Permission is required to use salon images for commercial or promotional use.",
    ],
  },

  {
    id: "website-usage",
    title: "Website Usage Policy",
    icon: AlertTriangle,
    content: [
      "You may browse the website for personal and non-commercial use only.",
      "You may not attempt to hack, disrupt, or misuse any part of the website functionality.",
      "We are not responsible for technical issues, downtime, or data transmission errors caused by third-party hosting providers.",
    ],
    subsections: [
      {
        title: "Third-Party Integrations",
        content: [
          "Our website uses Google Analytics and Microsoft Clarity to analyze traffic and enhance user experience.",
          "We do not control how third parties collect or use data. Refer to their respective policies for more information.",
        ],
      },
    ],
  },

  {
    id: "liability",
    title: "Limitation of Liability",
    icon: AlertTriangle,
    content: [
      "Zenora is not liable for any personal damages, allergic reactions, or side effects caused by beauty products unless negligence is proven.",
      "Service outcomes may vary depending on hair type, skin type, or customer maintenance and care.",
      "Zenora is not responsible for any loss of personal belongings inside the salon premises.",
    ],
  },

  {
    id: "changes",
    title: "Changes to Terms",
    icon: Clock,
    content: [
      "Zenora Unisex Salon reserves the right to update or modify these Terms & Conditions at any time without prior notice.",
      "Changes become effective immediately upon posting on this page.",
      "We encourage users to review this page periodically.",
    ],
  },

  {
    id: "contact",
    title: "Contact Us",
    icon: Mail,
    content: [
      "For any questions, concerns, or clarifications regarding these Terms & Conditions, you may contact us at:",
      "Zenora Unisex Salon",
      "1st Floor, Sc. School, Anil Studio Building, Rewa Rd, Opp. Christ Jyoti Road, Shakti Vihar, Jeevan Jyoti Colony, Satna",
      "Email: contact@zenorasalon.com",
      "Phone: +91 97534 54519",
    ],
  },
];


// home servives
export const homeservice: Service[] = [
  // ------------------- MEN -------------------
  {
    id: 1,
    icon: Scissors,
    title: "Men's Haircut & Styling",
    description:
      "Trendy and classic haircuts with expert finishing for a sharp, confident look.",
    price: "₹100 – ₹400",
    iconBg: "bg-golden",
    iconColor: "text-white",
    hoverGradient: "from-blue-700 to-blue-900",
  },

  {
    id: 2,
    icon: Palette,
    title: "Global Hair Color",
    description:
      "Full-head global coloring for a vibrant, even, and long-lasting shade—suitable for both men and women.",
    price: "₹2000 – ₹4500",
    iconBg: "bg-golden",
    iconColor: "text-white",
    hoverGradient: "from-red-700 to-red-900",
  },

  {
    id: 3,
    icon: Wand2,
    title: "Men's Facial Cleanup",
    description:
      "Deep-cleansing facial cleanup designed for men's skin to remove dullness and refresh.",
    price: "₹150 – ₹300",
    iconBg: "bg-golden",
    iconColor: "text-white",
    hoverGradient: "from-green-700 to-green-900",
  },

  // ------------------- WOMEN -------------------
  {
    id: 4,
    icon: Sparkles,
    title: "Women's Facial Treatments",
    description:
      "Luxurious facials for glowing, smooth, and hydrated skin, tailored to all skin types.",
    price: "₹500 – ₹1200",
    iconBg: "bg-golden",
    iconColor: "text-white",
    hoverGradient: "from-pink-700 to-pink-900",
  },

  {
    id: 5,
    icon: Crown,
    title: "Pre Bridal Package – Basic",
    description:
      "A complete pre-bridal beauty ritual including O3+ Whitening Facial, D-Tan, Body Polishing, Full Body Wax, Body Bleach, Hair Spa.",
    price: "₹6,999 - ₹11,999",
    iconBg: "bg-golden",
    iconColor: "text-white",
    hoverGradient: "from-rose-700 to-rose-900",
  },

  {
    id: 6,
    icon: Scissors,
    title: "Normal Wax (Woman)",
    description:
      "Affordable and smooth waxing services covering full arms, legs, underarms, back, and full body for a clean and polished look.",
    price: "₹50 – ₹1000",
    iconBg: "bg-golden",
    iconColor: "text-white",
    hoverGradient: "from-orange-700 to-orange-900",
  },
];

// ============================================================================
// GENDER-SPECIFIC SERVICES DATA
// ============================================================================

/**
 * Male grooming services
 * Specialized services for men's grooming needs
 */
export const maleServices: Service[] = [
  {
    id: 1,
    icon: Scissors,
    title: "Stylish Haircut",
    description:
      "Precision haircuts designed to enhance your style and bring out your confidence.",
    price: "₹35",
    iconBg: "bg-golden",
    iconColor: "text-white",
    hoverGradient: "from-slate-700 to-slate-900",
  },
  {
    id: 2,
    icon: Dumbbell,
    title: "Relaxing Body Massage",
    description:
      "Rejuvenate your body and mind with our soothing massage treatments for ultimate relaxation.",
    price: "₹45",
    iconBg: "bg-golden",
    iconColor: "text-white",
    hoverGradient: "from-slate-700 to-slate-900",
  },
  {
    id: 3,
    icon: Clock,
    title: "Beard Styling",
    description:
      "Expert grooming and styling to keep your beard perfectly shaped and healthy.",
    price: "₹25",
    iconBg: "bg-golden",
    iconColor: "text-white",
    hoverGradient: "from-golden to-golden",
  },
  {
    id: 5,
    icon: Smile,
    title: "Kids Haircut",
    description:
      "Gentle and fun haircuts for children, designed to keep them comfortable and stylish.",
    price: "₹20",
    iconBg: "bg-golden",
    iconColor: "text-white",
    hoverGradient: "from-slate-700 to-slate-900",
  },
];

/**
 * Female grooming services
 * Specialized services for women's styling and beauty needs
 */
export const femaleServices: Service[] = [
  {
    id: 4,
    icon: Sparkles,
    title: "Facial Treatments",
    description:
      "Luxury facials tailored to your skin type, leaving your skin refreshed and glowing.",
    price: "₹40",
    iconBg: "bg-golden",
    iconColor: "text-white",
    hoverGradient: "from-slate-700 to-slate-900",
  },
  {
    id: 6,
    icon: Zap,
    title: "Hair Coloring",
    description:
      "Professional hair coloring services with vibrant, long-lasting results customized to your style.",
    price: "₹55",
    iconBg: "bg-golden",
    iconColor: "text-white",
    hoverGradient: "from-slate-700 to-slate-900",
  },
  {
    id: 7,
    icon: Brush,
    title: "Makeup Services",
    description:
      "Professional makeup for any occasion, ensuring you look stunning and confident.",
    price: "₹50",
    iconBg: "bg-golden",
    iconColor: "text-white",
    hoverGradient: "from-pink-500 to-red-500",
  },
  {
    id: 8,
    icon: Star,
    title: "Manicure & Pedicure",
    description:
      "Pamper your hands and feet with our luxurious manicure and pedicure treatments.",
    price: "₹30",
    iconBg: "bg-golden",
    iconColor: "text-white",
    hoverGradient: "from-purple-700 to-purple-900",
  },
  {
    id: 9,
    icon: Heart,
    title: "Spa Treatments",
    description:
      "Relaxing spa experiences designed to rejuvenate your body and soul.",
    price: "₹60",
    iconBg: "bg-golden",
    iconColor: "text-white",
    hoverGradient: "from-pink-600 to-pink-900",
  },
];
/**
 * Additional service offerings list
 * Extended services available at Zenora
 */
export const FemaleAdditionalServices = [
  "Keratin & Smoothening",
  "Facial & Glow Treatment",
  "Hair Color & Styling",
  "Bridal Makeup",
  "Body Polishing",
  "Relaxing Spa Therapy",
];
export const MaleAdditionalServices = [
  "Precision Haircuts",
  "Beard Styling & Grooming",
  "Hair Spa & Dandruff Care",
  "Keratin & Smooth Finish",
  "Facial & Skin Detox",
  "Relaxing Head Massage",
];

// ============================================================================
// NAVIGATION DATA
// ============================================================================

/**
 * Main navigation links for the website
 * Used in navbar and footer components
 */
export const navigationLinks: NavLink[] = [
  { name: "Home", path: "/", icon: Home },
  { name: "About Us", path: "/about-us", icon: Users },
  { name: "Male Service", path: "/services/male", icon: UserRound },
  { name: "Female Service", path: "/services/female", icon: UserCircle },
  { name: "Portfolio", path: "/portfolio", icon: Grid },
  { name: "Blog", path: "/blog", icon: FileText },
  { name: "Contact Us", path: "/contact-us", icon: Phone },
];

// ============================================================================
// COMPONENT-SPECIFIC DATA
// ============================================================================

/**
 * Video items for the portfolio video section
 * Showcases team videos, salon tours, and transformations
 */

import pic1 from "@/assets/videogarrely/pic1.png"
import pic2 from "@/assets/videogarrely/exactly.png"
import pic3 from "@/assets/videogarrely/bride.png"


export const videoItems: VideoItem[] = [
  {
    id: 1,
    title: "Bride’s Dream Look Achieved",
    description: "Discover how we achieve every bride’s dream look",
    thumbnail: pic3.src,
    duration: "3:50",
    category: "Team Stories",
    icon: Users,
    videoUrl: "https://www.youtube.com/embed/WsK6s89GU5Q",
  },
  {
    id: 2,
    title: "Exactly How the Bride Wanted",
    description: "See how we brought her vision to life beautifully",
    thumbnail: pic2.src,
    duration: "3:20",
    category: "Virtual Tour",
    icon: Building,
    videoUrl: "https://www.youtube.com/embed/WsK6s89GU5Q",
  },
  {
    id: 3,
    title: "Client Transformations",
    description: "See how we turn visions into stunning results",
    thumbnail: pic1.src,
    duration: "4:15",
    category: "Transformations",
    icon: TrendingUp,
    videoUrl: "https://www.youtube.com/embed/TTsga-Ai8S4",
  },
];

/**
 * Hero section statistics for the home page
 * Animated counters showing company achievements
 */
export const heroStats: HeroStat[] = [
  { value: 5, suffix: "+", label: "Years Experience", duration: 1500 },
  { value: 5000, suffix: "+", label: "Happy Clients", duration: 2000 },
  { value: 98, suffix: "%", label: "Satisfaction", duration: 1800 },
];

/**
 * About section features for the home page
 * Key highlights and achievements
 */
export const aboutFeatures: AboutFeature[] = [
  { icon: Award, title: "52 Years", description: "Experience" },
  { icon: Users, title: "+3K+", description: "Happy Clients" },
  { icon: Scissors, title: "Premium", description: "Services" },
  { icon: TrendingUp, title: "Expert", description: "Barbers" },
];

/**
 * Gallery images for the home page barbershop gallery
 * Showcases salon work and atmosphere
 */
export const galleryImages: GalleryImage[] = [
  {
    url: i1,
    alt: "Vanity mirror reflecting expert haircut and styling",
    span: "md:row-span-2",
  },
  {
    url: i4,
    alt: "Professional hairstyling service with client seated on a luxurious salon sofa",
    span: "md:col-span-2",
  },
  {
    url: i3,
    alt: "Modern, elegant barbershop interior at Zenora",
    span: "md:col-span-1",
  },
  {
    url: i2,
    alt: "Hand-held shower head for a refreshing rinse",
    span: "md:col-span-1",
  },
];

/**
 * Gallery statistics for the home page
 * Key metrics and achievements
 */
export const galleryStats: GalleryStat[] = [
  { icon: Scissors, label: "Expert Cuts", value: "5000+" },
  { icon: Users, label: "Happy Clients", value: "2000+" },
  { icon: Award, label: "Years Experience", value: "5+" },
  { icon: Camera, label: "Gallery Photos", value: "500+" },
];



/**
 * Navigation items for the navbar
 * Main website navigation links
 */
export const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about-us" },
  { label: "Services", href: "/services/female" },
  { label: "Portfolio", href: "/portfolio" },
  // { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact-us" },
];

/**
 * Comments for blog details page
 * Default comments for blog posts
 */
import avatar1 from "@/assets/commentsImage/auther1.png";
import avatar2 from "@/assets/commentsImage/auther2.png";
import avatar3 from "@/assets/commentsImage/auther3.png";
import avatar4 from "@/assets/commentsImage/auther4.png";
import avatar5 from "@/assets/commentsImage/auther5.png";
import avatar6 from "@/assets/commentsImage/auther6.png";

export const defaultComments: Comment[] = [
  {
    id: "1",
    author: "Emilly Blunt",
    date: "December 4, 2017 at 3:12 pm",
    content:
      "Multiply sea night grass fourth day sea lesser rule open subdue female fill which them Blessed, give fill lesser bearing multiply sea night grass fourth day sea lesser",
    avatarSrc: avatar1.src,
  },
  {
    id: "2",
    author: "Himanshu Kushwaha",
    date: "December 4, 2017 at 3:12 pm",
    content:
      " On the fourth day, nature flourished abundantly, blessing us with its bounty. Every moment felt serene and harmonious, filling the day with gentle beauty and calm.",
    avatarSrc: avatar2.src,
  },
  {
    id: "3",
    author: "Aman Singh",
    date: "December 4, 2017 at 3:12 pm",
    content:
      "By the fourth day, the tranquil sea offered its abundance, a <em>blessing</em> that nurtured both land and soul with growth and harmony.",
    avatarSrc: avatar3.src,
  },
];

/**
 * Recent posts for blog details sidebar
 * Default recent posts data
 */
export const defaultRecentPosts = [
  {
    id: "1",
    title: "From life was you fish...",
    meta: "January 12, 2019",
    thumbnailSrc: img1,
  },
  {
    id: "2",
    title: "The Amazing Hubble",
    meta: "02 Hours ago",
    thumbnailSrc: img2,
  },
  {
    id: "3",
    title: "Astronomy Or Astrology",
    meta: "03 Hours ago",
    thumbnailSrc: img3,
  },
  {
    id: "4",
    title: "Asteroids telescope",
    meta: "01 Hours ago",
    thumbnailSrc: img4,
  },
];

/**
 * Product brands for the services page
 * Trusted brand partners
 */
export const productBrands: Brand[] = [
  {
    name: "L'Oréal Professionnel",
    tagline: "Professional Excellence",
  },
  {
    name: "Schwarzkopf",
    tagline: "German Precision",
  },
  {
    name: "Wella Men",
    tagline: "Men's Grooming Expert",
  },
];

/**
 * Product promises for the services page
 * Quality guarantees and commitments
 */
export const productPromises = [
  {
    icon: Shield,
    title: "Premium Quality",
    description: "Only international brands trusted by professionals",
  },
  {
    icon: Award,
    title: "Certified Products",
    description: "Authentic products sourced directly from manufacturers",
  },
  {
    icon: Sparkles,
    title: "Luxury Experience",
    description: "Elevate your grooming with world-class products",
  },
  {
    icon: CheckCircle,
    title: "Professional Grade",
    description: "The same products used in top salons worldwide",
  },
];

/**
 * Service categories for the services page
 * Detailed service offerings by category
 */
export const serviceCategoryItems = [
  {
    id: "haircut",
    title: "Hair Cut & Finish",
    icon: Scissors,
    color: "from-amber-400 to-orange-500",
    services: [
      { name: "Cut and Hair Care" },
      { name: "Shampoo & Conditioning" },
      { name: "Head Massage" },
      { name: "Beard Styling" },
      { name: "Hair/Beard Colouring" },
    ],
  },
  {
    id: "colour",
    title: "Hair Colour",
    icon: Brush,
    color: "from-pink-400 to-rose-500",
    services: [
      { name: "Hair Colour" },
      { name: "(Ammonia & Ammonia Free)" },
      { name: "Hi-Lites" },
      { name: "Beard Colour" },
    ],
  },
  {
    id: "texture",
    title: "Hair Texture",
    icon: Sparkles,
    color: "from-purple-400 to-indigo-500",
    services: [
      { name: "Hair Straightening" },
      { name: "Hair Smoothening" },
      { name: "Keratin Treatment" },
      { name: "Rebonding" },
    ],
  },
  {
    id: "spa",
    title: "Hair Spa",
    icon: Heart,
    color: "from-green-400 to-emerald-500",
    services: [
      { name: "Hair Spa" },
      { name: "Scalp Treatment" },
      { name: "Hair Fall Control" },
      { name: "Dandruff Treatment" },
    ],
  },
];

// ============================================================================
// LEGACY EXPORTS (for backward compatibility)
// ============================================================================

/**
 * Legacy exports to maintain compatibility with existing components
 * These can be removed once all components are updated to use the new names
 */

import { JustdialIcon } from "@/components/footer/JustdialIcon";

export const socials = [
  {
    Icon: Facebook,
    label: "Facebook",
    url: "https://www.facebook.com/zenoraunisexfamilysalon/",
  },

  {
    Icon: Instagram,
    label: "Instagram",
    url: "https://www.instagram.com/zenoraunisexfamilysalon_?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
  },
  {
    Icon: JustdialIcon, // we’ll use Image here
    label: "Justdial",
    url: "https://www.justdial.com/Satna/Zenora-Unisex-Family-Salon-Anil-Studio-Building-Shakti-Vihar/9999P7672-7672-240224105216-A6R8_BZDET",
    // image: JustdialIcon,
  },
  {
    Icon: Youtube, // we’ll use Image here
    label: "YouTube",
    url: "https://www.youtube.com/@ZenoraUnisexFamilySalon",
    // image: JustdialIcon,
  },
];

export const blogPost = blogPosts;
export const sections = privacyPolicySections;
export const service1 = serviceCategoriesMale;
export const service2 = serviceCategoriesFemale;

export const links = navigationLinks;
