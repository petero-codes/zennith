import { FaDiscord, FaGithub, FaMapPin, FaLinkedin } from "react-icons/fa";
import { HiCode, HiCube, HiDatabase, HiMail, HiBriefcase } from "react-icons/hi";

export const config = {
    developer: {
        name: "Zenith",
        vision: "To build a tech-driven future that transforms individual lives, accelerates business growth, and leaves a lasting legacy of innovation for generations to come.",
        motto: "Empowering People. Elevating Businesses. Inspiring Generations."
    },
    social: {
        github: "zenith-hq",
        discord: "#"
    },
    NAV_ITEMS: [
        { href: '/projects', label: 'Projects' },
        { href: '/contact', label: 'Contact' }
    ],
    recentTracks: false, // Enable/disable Spotify recent tracks
    projects: [
        {
            id: 1,
            title: "Zenith Enterprise Cloud Dashboard",
            description: "A comprehensive cloud management platform for monitoring, managing, and optimizing multi-cloud infrastructure. Features real-time metrics, cost analysis, automated scaling, and security compliance monitoring.",
            image: "/projects/project-4.webp",
            technologies: ["React", "Next.js", "Go", "Kubernetes", "Grafana"],
            github: "https://github.com",
            demo: "https://example.com"
        },
        {
            id: 2,
            title: "Zenith AI-Powered Analytics",
            description: "An intelligent analytics platform that uses machine learning to process massive datasets, detect trends, and suggest optimizations. Features real-time data visualization and automated reporting.",
            image: "/projects/project-1.webp",
            technologies: ["Python", "TensorFlow", "React", "FastAPI"],
            github: "https://github.com",
            demo: "https://example.com"
        },
        {
            id: 3,
            title: "Zenith Global Sync Platform",
            description: "A next-generation real-time synchronization platform for enterprise applications. Supports high-throughput data pipelines and edge computing deployments.",
            image: "/projects/project-2.webp",
            technologies: ["TypeScript", "WebRTC", "Socket.io", "Node.js", "Redis"],
            github: "https://github.com",
            demo: "https://example.com"
        }
    ],
    skills: [
        {
            title: "Frontend Solutions",
            icon: <HiCode />,
            description: "Modern web interfaces for enterprise scale",
            bgClass: "bg-blue-500/10",
            iconClass: "text-blue-500",
            skills: [
                { name: "Next.js", level: "Enterprise", hot: true },
                { name: "React", level: "Enterprise" },
                { name: "TailwindCSS", level: "Enterprise" },
                { name: "TypeScript", level: "Enterprise" }
            ]
        },
        {
            title: "Backend Systems",
            icon: <HiDatabase />,
            description: "Scalable server & database architectures",
            bgClass: "bg-emerald-500/10",
            iconClass: "text-emerald-500",
            skills: [
                { name: "Node.js", level: "Enterprise", hot: true },
                { name: "PostgreSQL", level: "Enterprise" },
                { name: "Python", level: "Enterprise", hot: true }
            ]
        },
        {
            title: "Infrastructure",
            icon: <HiCube />,
            description: "Cloud & Deployment Tools",
            bgClass: "bg-orange-500/10",
            iconClass: "text-orange-500",
            skills: [
                { name: "Kubernetes", level: "Expert", hot: true },
                { name: "AWS", level: "Advanced" },
                { name: "Docker", level: "Expert" }
            ]
        }
    ],
    experiences: [
        {
            position: "Enterprise Solutions Provider",
            company: "Zenith Corporation",
            period: "2020 - Present",
            location: "Global",
            description: "Delivering modern, scalable, and secure software solutions for enterprise clients worldwide. Focusing on performance, reliability, and cutting-edge architectures.",
            responsibilities: [
                "Building robust cloud infrastructure and high-availability web applications",
                "Implementing modern UI/UX designs and comprehensive design systems",
                "Optimizing application performance and ensuring strict security standards",
                "Partnering with global brands to drive digital transformation"
            ],
            technologies: ["React", "Next.js", "Cloud Architecture", "AI/ML", "Microservices"]
        }
    ],
    contactInfo: [
        {
            icon: <HiBriefcase className="w-5 h-5" />,
            label: "Company",
            value: "Zenith",
            link: null
        },
        {
            icon: <HiMail className="w-5 h-5" />,
            label: "Email",
            value: "contact@zenith.example.com",
            link: "mailto:contact@zenith.example.com"
        },
        {
            icon: <FaMapPin className="w-5 h-5" />,
            label: "Headquarters",
            value: "Global",
            link: null
        }
    ]
}