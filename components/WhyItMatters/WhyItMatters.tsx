import "./WhyItMatters.css";
import { TrendingUp, Globe, ShieldCheck, IndianRupee } from "lucide-react";
import { ReactNode } from "react";
import { ShineBorder } from "@/components/ui/shine-border";

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
            "Become a Cloud Engineer, DevOps Engineer, Solutions Architect, or Site Reliability Engineer-across industries.",
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
                    The cloud and DevOps revolution is here - position yourself at the forefront
                </p>
                <div className="why-grid">
                    {stats.map((item, i) => (
                        <div
                            key={i}
                            className="why-card reveal"
                            style={{ transitionDelay: `${i * 0.1}s` }}
                        >
                            <ShineBorder
                                className="pointer-events-none"
                                shineColor={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
                            />
                            <div className="why-card__icon">{item.icon}</div>
                            <div className="why-card__stat">{item.stat}</div>
                            <h3 className="why-card__title">{item.title}</h3>
                            <p className="why-card__desc">{item.description}</p>
                        </div>
                    ))}
                </div>

                <div className="section-cta reveal">
                    <a href="#register" className="btn btn-primary btn-lg">
                        Save My Free Spot
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
                    </a>
                </div>
            </div>
        </section>
    );
}
