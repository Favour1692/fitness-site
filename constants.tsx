import { navlinks, reviews } from "./type";
// import { FaClock } from "react-icons/fa";

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

// export const benefits: benefit[] = [
//   {
//     id: 1,
//     icon: <FaClock />,
//     title: "open early, close late",
//     description: "Work out whenever it works for you",
//   },
//   {
//     id: 2,
//     icon: <FaClock />,
//     title: "expert trainers",
//     description: "Real coaching, smart training",
//   },
//   {
//     id: 3,
//     icon: <FaClock />,
//     title: "flexible memberships",
//     description: "Monthly, quaterly or drop-in options",
//   },
//   {
//     id: 4,
//     icon: <FaClock />,
//     title: "Results-driven programs",
//     description: "Tailored to match every fitness level",
//   },
//   {
//     id: 5,
//     icon: <FaClock />,
//     title: "Group and solo options",
//     description: "Train how you prefer",
//   },
//   {
//     id: 6,
//     icon: <FaClock />,
//     title: "clean and spacious facility",
//     description: "Workout in comfort and safety",
//   },
//   {
//     id: 7,
//     icon: <FaClock />,
//     title: "nutritional coaching available",
//     description: "Fuel your progress",
//   },
//   {
//     id: 8,
//     icon: <FaClock />,
//     title: "supportive community",
//     description: "You're never alone",
//   },
// ];
