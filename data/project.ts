import { 
  RiNextjsFill,
  RiTailwindCssFill,
  RiNodejsLine,
  RiReactjsFill
} from "react-icons/ri";
import { SiTypescript, SiRedux, SiMongodb, SiWebstorm, SiRsocket } from "react-icons/si";
import { FaGithub, FaAws, FaAngular, FaStripe, FaChartPie } from "react-icons/fa";

export const projects = [
  {
    id: 1,
    title: "Business Portfolio",
    description:
      "A business portfolio website to showcase the company core values and projects.",
    img: "project-1.png",
    techstack: [
      {icon: RiNextjsFill, name: "Next.js"},
      {icon: RiTailwindCssFill, name: "Tailwind CSS"},
      {icon: RiNodejsLine, name: "Node.js"},
      {icon: SiRedux, name: "Redux"},
      {icon: SiMongodb, name: "MongoDB"},
      {icon: SiTypescript, name: "TypeScript"},
      {icon: FaGithub, name: "GitHub"},
      {icon: FaAws, name: "Aws"},
    ],
    about: {
      description:
        "A professional, visually appealing platform to showcase business services, projects, and client testimonials, providing a seamless experience for potential clients and partners.",
      teamMembers: 5,
      country: "India",
      industry: "Professional Services",
      launch: 2021,
      challenges: [
        "Difficulty in creating a visually appealing, professional, and user-friendly portfolio that showcases the company's expertise and services.",
        "Ensuring the site is responsive and works well on multiple devices.",
      ],
      solutions: [
        "Developed a sleek, modern design using responsive frameworks (e.g., Tailwind CSS, Bootstrap) to ensure cross-device compatibility.",
        "Integrated smooth navigation and visually rich elements like sliders, carousels, and service grids to enhance user engagement.",
      ],
      result: [
        "The portfolio successfully attracted new clients by effectively highlighting the company's services, skills, and past projects.",
        "Achieved a 30% increase in client inquiries and improved brand perception through professional design.",
      ],
    },
  },
  {
    id: 2,
    title: "E-commerce Website",
    description:
      "An online shopping platform with product listings, a shopping cart, and payment gateway integration.",
    img: "project-2.png",
    techstack: [
      {icon: RiReactjsFill, name: "React.js"},
      {icon: RiNodejsLine, name: "Node.js"},
      {icon: SiRedux, name: "Redux"},
      {icon: SiMongodb, name: "MongoDB"},
      {icon: FaStripe, name: "Stripe API"},
      {icon: FaGithub, name: "GitHub"},
      {icon: FaAws, name: "Aws"},
    ],
    about: {
      description:
        "A scalable online store platform with seamless product browsing, secure checkout, and integrated payment solutions, offering a user-friendly experience for customers and vendors.",
      teamMembers: 5,
      country: "India",
      industry: "E-Commerce",
      launch: 2021,
      challenges: [
        "Building a secure and scalable e-commerce platform to handle large amounts of product listings, user transactions, and customer data.",
        "Ensuring smooth user experience with payment gateways and a quick checkout process.",
      ],
      solutions: [
        "Used a full-stack approach with frameworks like Next.js and integrated third-party payment gateways (e.g., Stripe, PayPal) for secure transactions.",
        "Optimized the UI/UX with features like real-time product search, customer reviews, wishlists, and personalized recommendations.",
      ],
      result: [
        "Increased sales conversion by 25% due to a more user-friendly and secure platform.",
        "Reduced cart abandonment rate by 15% with an optimized checkout process and payment integration.",
      ],
    },
  },
  {
    id: 3,
    title: "Employee Task & Project Management Dashboard",
    description:
      "Dashboard to manage tasks, projects, deadlines, and team collaboration effectively.",
    img: "project-3.png",
    techstack: [
      {icon: RiNextjsFill, name: "Next.js"},
      {icon: RiNodejsLine, name: "Node.js"},
      {icon: SiMongodb, name: "MongoDB"},
      {icon: SiWebstorm, name: "Websocket.js"},
      {icon: FaChartPie, name: "Chart.js"},
      {icon: FaGithub, name: "GitHub"},
      {icon: FaAws, name: "Aws"},
    ],
    about: {
      description:
        "A comprehensive platform designed to streamline team collaboration, track project progress, assign tasks, and enhance productivity through real-time updates and task management features.",
      teamMembers: 5,
      country: "India",
      industry: "Enterprise Software",
      launch: 2021,
      challenges: [
        "Creating a centralized platform to manage employee tasks, track progress, and ensure efficient collaboration among teams.",
        "Integrating task assignment, deadlines, and notifications to improve workflow.",
      ],
      solutions: [
        "Developed a web-based application with task categorization, deadline tracking, team collaboration features, and push notifications.",
        "Integrated tools like calendars, file sharing, and team chat for seamless communication and tracking.",
      ],
      result: [
        "Increased team productivity by 35% by providing employees with an intuitive tool to organize tasks and track progress.",
        "Reduced task management overhead for managers, resulting in faster project completion times.",
      ],
    },
  },
  {
    id: 4,
    title: "Blog Platform",
    description:
      "A blogging platform where users can create, edit, and delete blog posts.",
    img: "project-4.png",
    techstack: [
      {icon: RiReactjsFill, name: "React.js"},
      {icon: RiNodejsLine, name: "Node.js"},
      {icon: SiRedux, name: "Redux"},
      {icon: SiMongodb, name: "MongoDB"},
      {icon: FaStripe, name: "Stripe API"},
      {icon: FaGithub, name: "GitHub"},
      {icon: FaAws, name: "Aws"},
    ],
    about: {
      description:
        "A content management system (CMS) enabling users to create, edit, and share blogs with an intuitive interface, while supporting real-time comments and user engagement.",
      teamMembers: 5,
      country: "India",
      industry: "Media",
      launch: 2021,
      challenges: [
        "Designing a dynamic, scalable blog platform that supports various media types (e.g., text, images, videos) and provides a good user experience.",
        "Enabling easy content management and user interaction (comments, likes).",
      ],
      solutions: [
        "Built with a CMS like WordPress or custom solutions in React, allowing easy content creation, editing, and publishing.",
        "Integrated social sharing, commenting systems, and rich media support (images, videos, embeds) to engage readers.",
      ],
      result: [
        "Increased user engagement by 40% as a result of interactive features and optimized content management.",
        "Blog's traffic grew by 50% within the first six months due to SEO optimization and ease of use for writers.",
      ],
    },
  },
  {
    id: 5,
    title: "Real-Time Chat Application",
    description:
      "A real-time chat app with private messaging and group chat features.",
    img: "project-5.png",
    techstack: [
      {icon: FaAngular, name: "Angular.js"},
      {icon: SiRsocket, name: "Socket.js"},
      {icon: RiNodejsLine, name: "Node.js"},
      {icon: SiMongodb, name: "MongoDB"},
      {icon: FaGithub, name: "GitHub"},
      {icon: FaAws, name: "Aws"},
    ],
    about: {
      description:
        "A real-time messaging platform facilitating secure one-on-one and group chats, with integrated multimedia sharing and notifications for enhanced communication.",
      teamMembers: 5,
      country: "India",
      industry: "Social Media",
      launch: 2021,
      challenges: [
        "Building a real-time messaging application that can handle large user bases, provide instant notifications, and ensure data privacy and security.",
        "Ensuring the application is scalable and works across various platforms (mobile, desktop).",
      ],
      solutions: [
        "Developed using WebSockets for real-time communication, and integrated end-to-end encryption for privacy.",
        "Used frameworks like React and Node.js for responsiveness and scalability, ensuring performance under heavy user loads.",
      ],
      result: [
        "The chat application handled more than 100,000 active users, with low latency and no downtime.",
        "The app's usage increased by 50% within the first month of launch, with user satisfaction reports indicating a seamless experience.",
      ],
    },
  },
];
