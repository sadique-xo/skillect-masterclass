import "./WhyItMatters.css";
import { TrendingUp, Globe, ShieldCheck, IndianRupee } from "lucide-react";
import { ReactNode } from "react";

const stats: { icon: ReactNode; stat: string; title: string; description: string }[] = [
    {
        icon: <TrendingUp size={28} />,
        stat: "20%+",
        title: "Soaring Demand",
        description:
            "DevOps and AWS roles are growing faster than traditional IT jobs, with some profiles seeing over 20% annual growth.",
    },
    {
        icon: <Globe size={28} />,
        stat: "10+",
        title: "Diverse Career Options",
        description:
            "Become a Cloud Engineer, DevOps Engineer, Solutions Architect, or Site Reliability Engineer—across industries.",
    },
    {
        icon: <ShieldCheck size={28} />,
        stat: "∞",
        title: "Future-Proof Skills",
        description:
            "With automation, AI, and cloud becoming standard, these skills make you an asset in any industry.",
    },
    {
        icon: <IndianRupee size={28} />,
        stat: "₹7–10L",
        title: "High Starting Salaries",
        description:
            "Entry-level roles in AWS and DevOps can start at ₹7–10 LPA, with room for fast-track growth.",
    },
];

export default function WhyItMatters() {
    return (
        <section className="section" id="why">
            <div className="container">
                <h2 className="section-title reveal">Why It Matters Right Now</h2>
                <p className="section-subtitle reveal">
                    The cloud and DevOps revolution is here — position yourself at the forefront
                </p>
                <div className="why-grid">
                    {stats.map((item, i) => (
                        <div
                            key={i}
                            className="why-card reveal"
                            style={{ transitionDelay: `${i * 0.1}s` }}
                        >
                            <div className="why-card__icon">{item.icon}</div>
                            <div className="why-card__stat">{item.stat}</div>
                            <h3 className="why-card__title">{item.title}</h3>
                            <p className="why-card__desc">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
