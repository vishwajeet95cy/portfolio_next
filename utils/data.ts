import {
  Car,
  Clock,
  Code2,
  ShoppingCart,
  Database,
  Layout,
  Server,
  Cloud,
  GitBranch,
  Terminal,
  Palette,
  Shield,
  Zap,
  Cpu,
  Globe,
  CreditCard,
} from "lucide-react";

export const experienceStats = [
  { value: 5, suffix: "+", label: "Years Experience" },
  { value: 10, suffix: "+", label: "Projects Completed" },
  { value: 5, suffix: "+", label: "Happy Clients" },
  { value: 100, suffix: "%", label: "Dedication" },
];

export const projects = [
  {
    title: "Queuick",
    description:
      "A queue management system for salons/restaurants with real-time booking features including appointment scheduling, waitlist management, and admin dashboard.",
    tech: ["Next.js", "Node.js", "MongoDB", "Socket.io"],
    icon: Clock,
    color: "from-blue-500 to-cyan-500",
    features: [
      "Appointment Scheduling",
      "Waitlist Management",
      "Admin Dashboard",
      "Real-time Updates",
    ],
  },
  {
    title: "Shopper",
    description:
      "Full-featured e-commerce platform with product listing, shopping cart, secure checkout, and comprehensive admin panel for product and user management.",
    tech: ["React", "Node.js", "MongoDB", "Redux", "Razorpay"],
    icon: ShoppingCart,
    color: "from-purple-500 to-pink-500",
    features: [
      "Product Catalog",
      "Shopping Cart",
      "Secure Checkout",
      "Admin Panel",
      "Search & Filters",
    ],
  },
  {
    title: "VishwalUtils",
    description:
      "Text utility tool providing case conversion, text-to-speech functionality, and file generation capabilities for enhanced productivity.",
    tech: ["React", "Web Speech API", "File API"],
    icon: Code2,
    color: "from-green-500 to-emerald-500",
    features: [
      "Case Conversion",
      "Text-to-Speech",
      "File Generation",
      "Real-time Preview",
    ],
  },
  {
    title: "Farex",
    description:
      "Car pooling booking system enabling users to book available seats in cars, making travel more economical and environmentally friendly.",
    tech: ["React", "Node.js", "MySQL", "Express"],
    icon: Car,
    color: "from-orange-500 to-red-500",
    features: [
      "Seat Booking",
      "Route Management",
      "User Profiles",
      "Booking History",
    ],
  },
];

export const skillCategories = [
  {
    title: "Frontend Development",
    icon: Layout,
    color: "from-blue-500 to-cyan-500",
    skills: [
      { name: "React.js", level: 95 },
      { name: "Next.js", level: 90 },
      { name: "TypeScript", level: 85 },
      { name: "JavaScript (ES6+)", level: 92 },
      { name: "HTML5 & CSS3", level: 95 },
      { name: "Tailwind CSS", level: 90 },
      { name: "Bootstrap", level: 88 },
      { name: "Material UI", level: 85 },
      { name: "Redux", level: 90 },
    ],
  },
  {
    title: "Backend Development",
    icon: Server,
    color: "from-green-500 to-emerald-500",
    skills: [
      { name: "Node.js", level: 92 },
      { name: "Express.js", level: 90 },
      { name: "RESTful APIs", level: 95 },
      { name: "JWT Authentication", level: 90 },
      { name: "OAuth / Passport.js", level: 85 },
      { name: "Socket.io", level: 80 },
      { name: "Redis", level: 70 },
      { name: "RabbitMQ / BullMQ", level: 65 },
      { name: "GraphQL", level: 65 },
    ],
  },
  {
    title: "Database & Cloud",
    icon: Database,
    color: "from-purple-500 to-pink-500",
    skills: [
      { name: "MongoDB", level: 90 },
      { name: "MySQL", level: 85 },
      { name: "PostgreSQL", level: 75 },
      { name: "Mongoose", level: 85 },
      { name: "Sequelize", level: 80 },
      { name: "Prisma", level: 70 },
      { name: "AWS", level: 65 },
      { name: "Firebase", level: 80 },
      { name: "Vercel / Netlify", level: 85 },
    ],
  },
  {
    title: "DevOps & Tools",
    icon: GitBranch,
    color: "from-orange-500 to-red-500",
    skills: [
      { name: "Git & GitHub", level: 92 },
      { name: "BitBucket", level: 85 },
      { name: "Postman", level: 90 },
      { name: "Docker", level: 72 },
      { name: "CI/CD", level: 70 },
      { name: "Webpack", level: 75 },
      { name: "Figma", level: 80 },
      { name: "VS Code", level: 95 },
    ],
  },
];

export const additionalSkills = [
  { name: "Stripe", icon: CreditCard },
  { name: "Razorpay", icon: CreditCard },
  { name: "PhonePe", icon: CreditCard },
  { name: "CXPay", icon: CreditCard },
  { name: "PeachPayments", icon: CreditCard },
  { name: "JWT Auth", icon: Shield },
  { name: "Socket.io", icon: Zap },
  { name: "Redux Toolkit", icon: Cpu },
  { name: "Figma to UI", icon: Palette },
  { name: "Vercel", icon: Globe },
];

export const experiences = [
  {
    title: "Full Stack Developer",
    company: "Grepix Infotech Pvt Ltd",
    location: "Noida",
    period: "Nov 2024 - Mar 2026",
    achievements: [
      "Developed scalable web applications using React, Next.js, Node.js, Express.js, and MySQL",
      "Implemented RESTful APIs for seamless frontend-backend communication",
      "Optimized performance using Redux and React Router",
      "Ensured responsive design with Bootstrap, CSS Grid, and Media Queries",
      "Worked with Sequelize ORM for MySQL database interactions",
      "Built microservices architecture for scalable APIs and servers",
    ],
  },
  {
    title: "Software Engineer II",
    company: "Forklabs Technologies Pvt. Ltd.",
    location: "Haryana",
    period: "Apr 2023 - Jul 2024",
    achievements: [
      "Built high-performance web applications using MERN stack",
      "Enhanced authentication using Google OAuth and Passport.js",
      "Developed reusable React components and managed state with Redux",
      "Designed RESTful APIs using Node.js and Express.js",
      "Improved UI/UX with Bootstrap, Material UI, and CSS3 animations",
    ],
  },
  {
    title: "Software Engineer",
    company: "Heytech IT Services",
    location: "Haryana",
    period: "Oct 2020 - Apr 2023",
    achievements: [
      "Developed full-stack applications using React, Node.js, Express.js, MongoDB",
      "Integrated Stripe and Razorpay for secure payment processing",
      "Implemented JWT-based authentication for secure sessions",
      "Collaborated in Agile teams using Git, BitBucket, and Slack",
    ],
  },
  {
    title: "Full Stack Developer",
    company: "Freelance & Projects",
    location: "Remote",
    period: "2019 - Present",
    achievements: [
      "Designed RESTful APIs in Node.js/Express.js for client-side consumption",
      "Improved UI/UX with Bootstrap, Material UI, and CSS3 animations",
      "Built multiple production-ready applications for clients",
      "Continuous learning and implementation of modern technologies",
    ],
  },
];
