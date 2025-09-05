import { navlinks, reviews, programs, faq, Social, bg } from "./type";
import { FaCalendarAlt, FaBolt, FaHome } from "react-icons/fa";
import { LuDumbbell } from "react-icons/lu";
import { benefit } from "./type";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";

export const navdata: navlinks[] = [
  {
    id: 1,
    href: "/",
    title: "Home",
  },
  {
    id: 2,
    href: "/about",
    title: "About Us",
  },
  {
    id: 3,
    href: "/programs",
    title: "Programs",
  },
  {
    id: 4,
    href: "/contact",
    title: "Contact",
  },
];

export const landingBg: bg = {
  backgroundImage: "url('/homeLanding.webp')",
  backgroundPosition: "center center",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
};
export const offerbg: bg = {
  backgroundImage: "url('/offer.webp')",
  backgroundPosition: "top center",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
};
export const overlay: bg = {
  backgroundImage: "url('/overlay2.jpg')",
  backgroundRepeat: "repeat",
};

export const testimonial: reviews[] = [
  {
    id: 1,
    content: "The trainers actually care and it shows",
  },
  {
    id: 2,
    content: "I've tried other gyms but this one sticks",
  },
  {
    id: 3,
    content: "Every session pushes me, but I leave smiling",
  },
  {
    id: 4,
    content: "In three months, I've dropped 20 pounds",
  },
  {
    id: 5,
    content: "Despite my busy schedule, I could use here",
  },
];

export const benefits: benefit[] = [
  {
    id: 1,
    icon: <FaHome />,
    title: "clean and spacious facility",
    description: "Workout in comfort and safety",
  },
  {
    id: 2,
    icon: <LuDumbbell />,
    title: "expert trainers",
    description: "Real coaching, smart training",
  },
  {
    id: 3,
    icon: <FaCalendarAlt />,
    title: "flexible memberships",
    description: "Monthly, quaterly or drop-in options",
  },
  {
    id: 4,
    icon: <FaBolt />,
    title: "Results-driven programs",
    description: "Tailored to match every fitness level",
  },
];

export const program: programs[] = [
  {
    id: 1,
    image: "/hiit.webp",
    title: "strength and conditioning",
  },
  {
    id: 2,
    image: "/hiit.webp",
    title: "functional mobility and flexibility",
  },
  {
    id: 3,
    image: "/hiit.webp",
    title: "HIIT and cardio burnouts",
  },
  {
    id: 4,
    image: "/hiit.webp",
    title: "personal training and coaching",
  },
  {
    id: 5,
    image: "/hiit.webp",
    title: "nutrition and wellness coaching",
  },
  {
    id: 6,
    image: "/hiit.webp",
    title: "group fitness classes",
  },
  {
    id: 7,
    image: "/hiit.webp",
    title: "yoga and flexibility",
  },
];

export const FAQs: faq[] = [
  {
    value: "item-1",
    question: "How do I open an account?",
    answer:
      "Opening an account is easy and takes less than 5 minutes. Just download our app, provide your details, verify your identity and you're ready to start transacting.",
  },
  {
    value: "item-2",
    question: "Is my money safe with you?",
    answer:
      "Absolutely, your funds are secure. We use bank-level encryption, two-factor authentication, and are fully compliant with local financial regulations to keep your money and data protected.",
  },
  {
    value: "item-3",
    question: "What kind of services do you offer?",
    answer:
      "We offer savings, payments, transfers and financial planning tools. From managing personal finances to large business transactions, we've got you covered.",
  },
  {
    value: "item-4",
    question: "Are there any fees?",
    answer:
      "Most of our core services are free. We may charge small transaction or service fees in specific cases which are always clearly disclosed before you proceed.",
  },
];

export const socials: Social[] = [
  {
    id: 1,
    logo: <FaLinkedinIn />,
    href: "#",
  },
  {
    id: 2,
    logo: <FaSquareXTwitter />,
    href: "#",
  },
  {
    id: 3,
    logo: <FaInstagramSquare />,
    href: "#",
  },
  {
    id: 4,
    logo: <FaFacebook />,
    href: "#",
  },
];
