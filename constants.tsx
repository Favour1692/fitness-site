import { navlinks, reviews, programs } from "./type";
import { FaCalendarAlt, FaBolt, FaHome } from "react-icons/fa";
import { LuDumbbell } from "react-icons/lu";
import { benefit } from "./type";

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

export const landingBg = {
  backgroundImage: "url('/homeLanding.webp')",
  backgroundPosition: "center center",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
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
