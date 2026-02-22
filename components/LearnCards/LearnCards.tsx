import "./LearnCards.css";
import { Cloud, Settings, Workflow, Rocket, Map, Briefcase } from "lucide-react";
import { ReactNode } from "react";

const topics: { icon: ReactNode; title: string; description: string }[] = [
    {
        icon: <Cloud size={24} />,
        title: "Cloud Computing & AWS Essentials",
        description:
            "Grasp the core concepts of cloud computing and explore how AWS powers modern digital infrastructure across industries.",
    },
    {
        icon: <Settings size={24} />,
        title: "DevOps in Action",
        description:
            "Understand key DevOps principles like automation, CI/CD, and collaboration-plus how they improve software delivery in real-world teams.",
    },
    {
        icon: <Workflow size={24} />,
        title: "AWS + DevOps Synergy",
        description:
            "Learn how these two powerful domains integrate to drive innovation, speed, and scalability in tech projects.",
    },
    {
        icon: <Rocket size={24} />,
        title: "Emerging Tools & 2025 Career Trends",
        description:
            "Stay ahead of the curve with insights into the most in-demand tools, technologies, and job roles shaping the future of IT.",
    },
    {
        icon: <Map size={24} />,
        title: "Your Career Kickstart Plan",
        description:
            "Walk away with a step-by-step guide to build a career in cloud and DevOps, including skill-building, certifications, and job-readiness.",
    },
    {
        icon: <Briefcase size={24} />,
        title: "Real-World Use Cases & Project Scenarios",
        description:
            "Explore practical examples and case studies that show how cloud and DevOps are applied in actual projects-from startups to enterprise systems.",
    },
];

export default function LearnCards() {
    return (
        <section className="section section-alt" id="learn">
            <div className="container">
                <h2 className="section-title reveal">What You&apos;ll Learn in This Free Webinar</h2>
                <p className="section-subtitle reveal">
                    A power-packed session covering the most essential topics in Cloud & DevOps
                </p>
                <div className="learn-grid">
                    {topics.map((topic, i) => (
                        <div
                            key={i}
                            className="learn-card reveal"
                            style={{ transitionDelay: `${i * 0.08}s` }}
                        >
                            <div className="learn-card__icon">{topic.icon}</div>
                            <h3 className="learn-card__title">{topic.title}</h3>
                            <p className="learn-card__desc">{topic.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
