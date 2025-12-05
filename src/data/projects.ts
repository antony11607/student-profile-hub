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
      "Dark/Light mode support",
      "SEO optimized"
    ],
    techStack: ["React 18", "TypeScript", "Tailwind CSS", "Vite", "Framer Motion"],
    duration: "2 weeks",
    status: "Completed",
    github: "https://github.com",
    demo: "https://demo.com"
  },
  {
    id: "todo-app",
    title: "Task Manager App",
    category: "Web Application",
    description: "A feature-rich todo application with local storage persistence, categories, and priority levels.",
    longDescription: "I developed this task manager to practice state management in React. It includes features like task categorization, priority levels, due dates, and data persistence using localStorage. The app helps users organize their daily tasks efficiently.",
    tags: ["React", "JavaScript", "CSS"],
    color: "bg-secondary/20",
    borderColor: "border-secondary/30",
    features: [
      "Add, edit, and delete tasks",
      "Task categorization",
      "Priority levels (High, Medium, Low)",
      "Due date tracking",
      "Local storage persistence",
      "Filter and search functionality"
    ],
    techStack: ["React", "JavaScript", "CSS Modules", "Local Storage API"],
    duration: "1 week",
    status: "Completed",
    github: "https://github.com"
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
  {
    id: "quiz-app",
    title: "Interactive Quiz App",
    category: "Educational",
    description: "An interactive quiz application with multiple categories, timer, and score tracking.",
    longDescription: "Created this quiz app as a fun way to learn about DOM manipulation and event handling. It features multiple quiz categories, timed questions, instant feedback, and a leaderboard to track high scores.",
    tags: ["React", "TypeScript", "Tailwind"],
    color: "bg-purple-100",
    borderColor: "border-purple-300",
    features: [
      "Multiple quiz categories",
      "Timed questions",
      "Instant feedback on answers",
      "Score tracking",
      "Leaderboard",
      "Share results on social media"
    ],
    techStack: ["React", "TypeScript", "Tailwind CSS", "Open Trivia DB API"],
    duration: "1 week",
    status: "Completed",
    github: "https://github.com",
    demo: "https://demo.com"
  },
  {
    id: "notes-app",
    title: "Markdown Notes App",
    category: "Productivity",
    description: "A note-taking application with markdown support, tags, and cloud sync functionality.",
    longDescription: "This notes app was built to help me organize my study materials. It supports markdown formatting, allows tagging notes for easy organization, and includes a search feature. Notes are saved locally with an option for cloud backup.",
    tags: ["React", "Node.js", "MongoDB"],
    color: "bg-orange-100",
    borderColor: "border-orange-300",
    features: [
      "Markdown editor with preview",
      "Tag-based organization",
      "Full-text search",
      "Auto-save functionality",
      "Export to PDF",
      "Dark mode support"
    ],
    techStack: ["React", "Node.js", "Express", "MongoDB", "Marked.js"],
    duration: "2 weeks",
    status: "In Progress",
    github: "https://github.com"
  }
];