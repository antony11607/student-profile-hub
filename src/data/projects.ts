export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  longDescription: string;
  tags: string[];
  color: string;
  borderColor: string;
  features: string[];
  techStack: string[];
  duration: string;
  status: string;
  github?: string;
  demo?: string;
}

export const projects: Project[] = [
  {
    id: "personal-portfolio",
    title: "Personal Portfolio Website",
    category: "Web Development",
    description: "A responsive portfolio website built with React and Tailwind CSS to showcase my projects and skills.",
    longDescription: "This portfolio website was my first major web development project. I built it to learn modern React practices and responsive design principles. The site features smooth animations, a clean UI, and is fully responsive across all devices.",
    tags: ["React", "Tailwind CSS", "TypeScript"],
    color: "bg-accent",
    borderColor: "border-primary/30",
    features: [
      "Responsive design for all screen sizes",
      "Smooth scroll animations",
      "Contact form integration",
      "SEO optimized"
    ],
    techStack: ["React", "TypeScript", "Tailwind CSS", "Vite", "Framer Motion"],
    duration: "2 weeks",
    status: "In progress",
    github: "https://github.com/antony11607/student-profile-hub",
    demo: "https://demo.com"
  },
  {
    id: "lost-and-found-app",
    title: "Lost & Found Application",
    category: "Web Application",
    description: "A smart Lost & Found Management System that helps users report, track, and reclaim lost items seamlessly",
    longDescription: "I developed this Lost & Found Application to streamline the process of reporting and reclaiming lost items. The app allows users to create accounts, report lost or found items with descriptions and photos, and search through reported items. It also includes an admin panel for managing reports and user interactions.",
    tags: ["HTML", "JavaScript", "CSS"],
    color: "bg-secondary/20",
    borderColor: "border-secondary/30",
    features: [
      "Add, edit, and delete lost/found item reports",
      "Lost and Found categorization",
      "Commenting on the Lost and Found posts",
      "Local storage persistence",
      "Filter and search functionality"
    ],
    techStack: ["HTML", "JavaScript", "CSS Modules", "Local Storage API","PHP"],
    duration: "1 week",
    status: "Completed",
    github: "https://github.com/antony11607/lost_found"
  },
  {
    id: "weather-app",
    title: "Weather Dashboard",
    category: "API Integration",
    description: "A weather application that fetches real-time weather data using OpenWeatherMap API.",
    longDescription: "This project helped me understand API integration and asynchronous JavaScript. The app fetches real-time weather data based on user location or search query, displaying temperature, humidity, wind speed, and a 5-day forecast.",
    tags: ["JavaScript", "API", "HTML/CSS"],
    color: "bg-blue-100",
    borderColor: "border-blue-300",
    features: [
      "Current weather display",
      "5-day weather forecast",
      "Location-based weather",
      "Search by city name",
      "Temperature unit conversion",
      "Weather icons and animations"
    ],
    techStack: ["HTML5", "CSS3", "JavaScript", "OpenWeatherMap API", "Geolocation API"],
    duration: "5 days",
    status: "Completed",
    github: "https://github.com",
    demo: "https://demo.com"
  },
  {
    id: "calculator",
    title: "Scientific Calculator",
    category: "Utility App",
    description: "A fully functional scientific calculator with basic and advanced mathematical operations.",
    longDescription: "Built this calculator to strengthen my JavaScript fundamentals. It supports basic arithmetic, scientific functions (sin, cos, tan, log), memory functions, and keyboard input. The UI is designed to mimic a real scientific calculator.",
    tags: ["JavaScript", "HTML", "CSS"],
    color: "bg-green-100",
    borderColor: "border-green-300",
    features: [
      "Basic arithmetic operations",
      "Scientific functions (sin, cos, tan)",
      "Logarithmic calculations",
      "Memory functions (M+, M-, MR, MC)",
      "Keyboard support",
      "Calculation history"
    ],
    techStack: ["HTML5", "CSS3", "Vanilla JavaScript", "Math.js library"],
    duration: "3 days",
    status: "Completed",
    github: "https://github.com"
  },
];