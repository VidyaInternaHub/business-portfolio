import {
  FaGithub,
  FaLinkedin,
  FaDocker,
  FaAws,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiNodedotjs,
  SiReact,
  SiJavascript,
  SiHtml5,
  SiCss3,
} from "react-icons/si";

export const navbarLinks = [
  {
    name: "Home",
    url: "/",
  },
  {
    name: "Services",
    url: "/services",
  },
  {
    name: "Projects",
    url: "/projects",
  },
  {
    name: "Tech Stack",
    url: "/techstack",
  },
  {
    name: "About Us",
    url: "/about",
  },
];

export const techStackData = {
  language: [
    { icon: SiTypescript, name: "TypeScript" },
    { icon: SiJavascript, name: "JavaScript" },
    { icon: SiHtml5, name: "HTML5" },
    { icon: SiCss3, name: "CSS3" },
  ],
  frontend: [
    { icon: SiReact, name: "React" },
    { icon: SiNextdotjs, name: "Next.js" },
    { icon: SiTailwindcss, name: "Tailwind CSS" },
  ],
  backend: [
    { icon: SiNodedotjs, name: "Node.js" },
    { icon: SiExpress, name: "Express" },
  ],
  database: [
    { icon: SiMongodb, name: "MongoDB" },
    { icon: SiPostgresql, name: "PostgreSQL" },
  ],
  devops: [
    { icon: FaDocker, name: "Docker" },
    { icon: FaAws, name: "AWS" },
    { icon: FaGitAlt, name: "Git" },
  ],
};

export const testimonialsData = [
  {
    id: 1,
    title: "Outstanding Web Development",
    content:
      "VidyaInterna Hub transformed our online presence with a stunning Next.js website. Their attention to detail and expertise in modern web technologies resulted in a fast, responsive, and user-friendly platform. The team's communication was excellent throughout the project, and they delivered ahead of schedule. Our new website has significantly improved our user engagement and conversion rates.",
    userImage: "/assets/images/user1.jpg",
    logo: "/assets/logos/logo.svg",
    name: "Sarah Chen",
    role: "CTO, TechVision Solutions",
  },
  {
    id: 2,
    title: "Exceptional Mobile App Development",
    content:
      "Working with VidyaInterna Hub on our mobile app was a fantastic experience. They developed a robust, scalable solution that exceeded our expectations. Their team's expertise in both iOS and Android platforms ensured a consistent user experience across devices. The app's performance and user feedback have been outstanding, helping us reach a wider audience.",
    userImage: "/assets/images/user2.jpg",
    logo: "/assets/logos/logo.svg",
    name: "Michael Rodriguez",
    role: "Product Manager, InnovateMobile",
  },
  {
    id: 3,
    title: "Revolutionary UI/UX Design",
    content:
      "VidyaInterna Hub's UI/UX team completely revolutionized our product's interface. Their user-centered design approach and attention to detail resulted in a significant improvement in user satisfaction and engagement metrics. The new design is not only visually appealing but also highly intuitive and accessible. Our customer feedback has been overwhelmingly positive.",
    userImage: "/assets/images/user3.jpg",
    logo: "/assets/logos/logo.svg",
    name: "Emily Watson",
    role: "Head of Design, CreativeTech Solutions",
  },
  {
    id: 4,
    title: "Seamless E-commerce Integration",
    content:
      "VidyaInterna Hub expertly integrated our e-commerce platform with a custom-built web solution. Their technical prowess in handling complex payment systems and inventory management was impressive. The resulting platform is secure, scalable, and has dramatically improved our online sales performance. Their support during and after deployment was exceptional.",
    userImage: "/assets/images/user4.jpg",
    logo: "/assets/logos/logo.svg",
    name: "David Park",
    role: "E-commerce Director, GlobalRetail Solutions",
  },
  {
    id: 5,
    title: "Best-in-Class Enterprise App Development",
    content:
      "Our enterprise needed a sophisticated internal management app, and VidyaInterna Hub delivered beyond expectations. They created a powerful, secure, and user-friendly solution that streamlined our operations. Their expertise in cross-platform development and enterprise-grade security measures was evident throughout. The app has significantly improved our team's productivity.",
    userImage: "/assets/images/user5.jpg",
    logo: "/assets/logos/logo.svg",
    name: "Amanda Foster",
    role: "Operations Manager, Enterprise Systems Inc.",
  },
  {
    id: 6,
    title: "Transformative Design System Implementation",
    content:
      "VidyaInterna Hub revolutionized our product ecosystem with a comprehensive design system. Their UI/UX team demonstrated exceptional skill in creating consistent, accessible, and scalable design components. The implementation has drastically reduced our development time and improved our product's visual coherence. A truly transformative collaboration.",
    userImage: "/assets/images/user6.jpg",
    logo: "/assets/logos/logo.svg",
    name: "James Wilson",
    role: "Design Director, InnovateUX",
  },
  {
    id: 7,
    title: "Innovative Progressive Web App Development",
    content:
      "VidyaInterna Hub developed a cutting-edge PWA that perfectly matched our vision. Their expertise in modern web technologies and offline-first approach resulted in an app that works flawlessly across all devices. The performance metrics and user engagement have exceeded our expectations, and the implementation of push notifications has significantly improved user retention.",
    userImage: "/assets/images/user7.jpg",
    logo: "/assets/logos/logo.svg",
    name: "Rachel Martinez",
    role: "Product Lead, TechStart Solutions",
  },
  {
    id: 8,
    title: "Expert UI/UX Research and Implementation",
    content:
      "The team at VidyaInterna Hub conducted thorough user research and delivered a complete UI/UX overhaul of our platform. Their data-driven approach to design decisions and attention to user feedback resulted in a 40% increase in user satisfaction. The new interface is intuitive, accessible, and perfectly aligned with our brand identity.",
    userImage: "/assets/images/user8.jpg",
    logo: "/assets/logos/logo.svg",
    name: "Thomas Zhang",
    role: "UX Director, DigitalFirst Corp",
  },
  {
    id: 9,
    title: "Full-Stack Web Application Excellence",
    content:
      "VidyaInterna Hub built our complex web application from the ground up. Their full-stack expertise and methodical approach to development resulted in a robust, scalable solution. The implementation of real-time features and advanced data visualization has transformed how our users interact with our platform. Exceptional work!",
    userImage: "/assets/images/user9.jpg",
    logo: "/assets/logos/logo.svg",
    name: "Lisa Anderson",
    role: "Technical Director, DataSync Technologies",
  },
  {
    id: 10,
    title: "Mobile-First Development Success",
    content:
      "Working with VidyaInterna Hub on our mobile-first platform was a game-changer. Their deep understanding of responsive design and mobile optimization techniques delivered an exceptional user experience. The performance improvements and intuitive interface they implemented have resulted in a 200% increase in mobile user engagement.",
    userImage: "/assets/images/user10.jpg",
    logo: "/assets/logos/logo.svg",
    name: "Kevin Patel",
    role: "Mobile Strategy Director, AppFuture",
  },
];
export const faqData = [
  {
    question: "What services do you offer?",
    answer:
      "We offer comprehensive digital solutions including web development, mobile app development and UI/UX design. Our team specializes in creating custom solutions tailored to your business needs.",
  },
  {
    question: "How long does it typically take to complete a project?",
    answer:
      "Project timelines vary depending on scope and complexity. A typical web development project takes 8-12 weeks, while larger enterprise solutions may take 3-6 months. We'll provide a detailed timeline during our initial consultation.",
  },
  {
    question: "Do you provide ongoing support after project completion?",
    answer:
      "Yes, we offer comprehensive post-launch support and maintenance packages. Our team provides 24/7 technical support, regular updates, and continuous monitoring to ensure your digital solutions remain optimal.",
  },
  {
    question: "What technologies do you specialize in?",
    answer:
      "We specialize in modern web technologies including React, Next.js, Node.js. We stay current with industry trends to deliver cutting-edge solutions that scale.",
  },
  {
    question: "How do you handle project communication?",
    answer:
      "We maintain transparent communication through regular updates, scheduled check-ins, and a dedicated project manager. We use collaborative tools to ensure you're always informed about your project's progress.",
  },
];
export const caseStudies = [
  {
    id: 1,
    title: "Rebranding Global Tech",
    description:
      "A complete overhaul of a tech giant’s visual identity by rebranding its logo, website, and communication materials. This transformation led to enhanced brand recognition and a more cohesive brand presence across global markets, ultimately resulting in increased customer engagement and a refreshed market position. This project demonstrated the power of user-centric design in driving business growth and customer satisfaction.",
    category: "Branding",
    image: "/case-study-img-1.jpg",
  },
  {
    id: 2,
    title: "E-commerce Revolution",
    description:
      "Boosting online sales by 200% through UX improvements, including streamlined navigation, a more intuitive checkout process, and mobile optimization. This project helped enhance customer satisfaction, reduce cart abandonment rates, and significantly improve conversion rates, leading to a substantial increase in revenue for the e-commerce platform.",
    category: "UX Design",
    image: "/case-study-img-2.jpg",
  },
  {
    id: 3,
    title: "Startup Launch Success",
    description:
      "Crafting a marketing strategy that led to 1M users in just 6 months by leveraging targeted social media campaigns, influencer partnerships, and data-driven content creation. The strategy successfully attracted early adopters, increased brand awareness, and fueled the startup’s rapid growth, laying a solid foundation for its future expansion.",
    category: "Marketing",
    image: "/case-study-img-3.jpg",
  },
];

export const projectsData = [
  {
    id: 0,
    img: "project-1.png",
    title: "E-commerce Website Redesign",
    description:
      "Revamped an online store to improve user experience and sales",
    url: "",
    techStack: ["next.js", "react.js", "node.js", "express.js", "mongodb"],
  },
  {
    id: 1,
    title: "Business Portfolio",
    description:
      "A business portfolio website to showcase the company core values and projects.",
    img: "project-1.png",
    techstack: [
      "Next.js",
      "Tailwind CSS",
      "TypeScript",
      "Zustand",
      "MongoDB",
      "Express",
      "Git",
      "AWS",
    ],
    about: {
      description:
        "A professional, visually appealing platform to showcase business services, projects, and client testimonials, providing a seamless experience for potential clients and partners.",
      teamMembers: 5,
      country: "India",
      industry: "Professional Services",
      launch: 2021,
    },
  },
  {
    id: 2,
    title: "E-commerce Website",
    description:
      "An online shopping platform with product listings, a shopping cart, and payment gateway integration.",
    img: "project-2.png",
    techstack: [
      "React",
      "Node.js",
      "MongoDB",
      "Express",
      "Stripe API",
      "Git",
      "AWS",
    ],
    about: {
      description:
        "A scalable online store platform with seamless product browsing, secure checkout, and integrated payment solutions, offering a user-friendly experience for customers and vendors.",
      teamMembers: 5,
      country: "India",
      industry: "E-Commerce",
      launch: 2021,
    },
  },
  {
    id: 3,
    title: "Employee Task & Project Management Dashboard",
    description:
      "Dashboard to manage tasks, projects, deadlines, and team collaboration effectively.",
    img: "project-3.png",
    techstack: [
      "React",
      "Node.js",
      "MongoDB",
      "Express",
      "WebSocket",
      "Chart.js",
    ],
    about: {
      description:
        "A comprehensive platform designed to streamline team collaboration, track project progress, assign tasks, and enhance productivity through real-time updates and task management features.",
      teamMembers: 5,
      country: "India",
      industry: "Enterprise Software",
      launch: 2021,
    },
  },
  {
    id: 4,
    title: "Blog Platform",
    description:
      "A blogging platform where users can create, edit, and delete blog posts.",
    img: "project-4.png",
    techstack: ["Angular", "Node.js", "MongoDB", "Express", "Git", "AWS"],
    about: {
      description:
        "A content management system (CMS) enabling users to create, edit, and share blogs with an intuitive interface, while supporting real-time comments and user engagement.",
      teamMembers: 5,
      country: "India",
      industry: "Media",
      launch: 2021,
    },
  },
  {
    id: 5,
    title: "Real-Time Chat Application",
    description:
      "A real-time chat app with private messaging and group chat features.",
    img: "project-5.png",
    techstack: [
      "Socket.io",
      "Node.js",
      "Express",
      "MongoDB",
      "React",
      "Git",
      "AWS",
    ],
    about: {
      description:
        "A real-time messaging platform facilitating secure one-on-one and group chats, with integrated multimedia sharing and notifications for enhanced communication.",
      teamMembers: 5,
      country: "India",
      industry: "Social Media",
      launch: 2021,
    },
  },
];

export const aboutUsPageData = {
  data: [
    {
      title: "Transparency",
      description:
        "At VidyaInterna Hub, we prioritize honesty and open communication, fostering trust with clients, partners, and employees. Transparency ensures everyone is aligned and engaged in creating exceptional products.",
    },
    {
      title: "Innovation",
      description:
        "We embrace cutting-edge technologies and forward-thinking approaches to stay ahead. Our commitment to innovation drives continuous improvement and empowers us to deliver groundbreaking solutions.",
    },
    {
      title: "Collaboration",
      description:
        "Teamwork is at the core of our success. By uniting diverse talents and perspectives, we create innovative solutions and achieve remarkable results for our clients.",
    },
    {
      title: "Excellence",
      description:
        "Delivering high-quality products and services is our priority. We focus on exceeding expectations through precision, dedication, and an unwavering commitment to excellence.",
    },
    {
      title: "Customer Focus",
      description:
        "Our customers are at the heart of everything we do. We are committed to understanding their needs and delivering solutions that add real value to their lives and businesses.",
    },
    {
      title: "Sustainability",
      description:
        "We are dedicated to making a positive impact on the environment and society. Our efforts are focused on sustainable practices that align with our values and contribute to a better future.",
    },
  ],
  words:
    "At VidyaInterna Hub, we are dedicated to revolutionizing the education and training landscape. As a leading player in the Education & Training Services sector, we provide innovative and impactful learning experiences designed to prepare the next generation of professionals for success. Join us in shaping the future of education and training, and be a part of a team that is passionate about nurturing talent and driving innovation.",
};
export const footerData = {
  company: {
    name: "VidyaInterna Hub",
    description:
      "Building digital excellence through innovative solutions and transformative experiences.",
    socialLinks: [
      {
        name: "LinkedIn",
        url: "https://linkedin.com",
        icon: FaLinkedin,
      },
      {
        name: "GitHub",
        url: "https://github.com",
        icon: FaGithub,
      },
    ],
  },
  quickLinks: [
    {
      name: "About Us",
      url: "/about",
    },
    {
      name: "Careers",
      url: "/careers",
    },
    {
      name: "Contact Us",
      url: "/contactus",
    },
    {
      name: "Investor Relations",
      url: "/investorrelation",
    },
  ],
  legal: [
    {
      name: "Terms Of Use",
      url: "/termsofuse",
    },
    {
      name: "Privacy Policy",
      url: "/privacypolicy",
    },
    // {
    //   name: "Cookie policy",
    //   url: "/cookiepolicy",
    // },
    // {
    //   name: "Accessibility",
    //   url: "/accessibility",
    // },
  ],
  services: [
    {
      name: "Web Development",
      url: "/webdevelopment",
    },
    {
      name: "Mobile App Development",
      url: "/mobileappdevelopmwnt",
    },
    {
      name: "UI/UX Design",
      url: "/design",
    },
  ],
  contact: {
    phone: "+91 951 687 1900",
    email: "contact@vidyainterna.com",
    address: {
      street: "MP Nagar, Zone 1",
      city: "Bhopal",
      state: "Madhya Pradesh",
      country: "India",
      pincode: "462011",
    },
  },
};

export const servicecardData = [
  {
    image: "/icons/web.svg",
    title: "Web Development",
    description:
      "User-Friendly webplatforms,SaaS application and software products leveraging edge technologies",
  },
  {
    image: "/icons/mobile.svg",
    title: "Mobility",
    description:
      "Native and Hybrid applications with compelling UX after extensive user research,design modeliing across platforms",
  },
  {
    image: "icons/uiux.svg",
    title: "UI/UX Design",
    description:
      "Crafting an intuitive and engaging user experience,blending aesthetics & functionality",
  },
];
export const servicecarddescriptionData = [
  {
    image: "/image/pic1.png",
    title: "Experience Design",
    description:
      "Design-led engineering to provide a seamless experience to the users",
  },
  {
    image: "/image/pic5.png",
    title: "Front-end Development",
    description:
      "Intuitive,engaging and responsive using the best of breed framework & stacks",
  },
  {
    image: "/image/pic6.png",
    title: "Back-end Development",
    description:
      "Build responsive,intuitive cloud and data-native apps utilizing top-tier frameworks and technologies",
  },
  {
    image: "/image/pic8.png",
    title: "Quality Engineering & Testing",
    description:
      "Our software testing frameworks and methodology use automation frame-works and solutions to guarantee superior product qualitys",
  },
  {
    image: "/image/pic21.png",
    title: "DevOps as a Service",
    description:
      "Our DevOps team works closely with the development team to automate the end-to-end delivery pipeline across cloud platforms",
  },
  {
    image: "/image/pic2.png",
    title: "ios Development",
    description:
      "We develop intuitive iPhone and iPad applications, using Swift and Objective-C. We are well-versed with the related ecosystem as well as other frameworks such as SQLite, UI Kit, GData, Zxing, Cocos2d game engine, Apple push service & more",
  },
  {
    image: "/image/pic3.png",
    title: "Android Development",
    description:
      "With whooping market shares, Android is a widely used operating system across the globe. It is also one of the most complex ecosystems with a myriad of phones with different dimensions, screen size and resolution. We develop custom Android applications for businesses across varied domains",
  },
  {
    image: "/image/pic11.png",
    title: "Hybrid Application Development",
    description:
      "We use a variety of technologies to develop platform-agnostic hybrid applications, resulting in superior user experience. We have expertise in various cross-platform frameworks, such as React, Ionic, Phonegap, Sencha, Appcelerator, Titanium",
  },
  {
    image: "/image/pic12.png",
    title: "Mobile Automation Testing",
    description:
      "We address the challenges of mobile testing using targeted device selection and maximizing the use of automation to reduce costs. We use a comprehensive suite of test frameworks and tools to fine-tune the application performance experience",
  },
  {
    image: "/image/pic23.svg",
    title: "Flutter Application Development",
    description:
      "We are a functional Flutter development company that builds native Flutter apps to engage your target audience meaningfully. Our development team is skilled at building multi-platform mobile applications using Flutter design and Cupertino (iOS style) components, that perform seamlessly across devices",
  },
];
