"use client";

import "./TrustSection.css";
import BlurText from "@/components/BlurText";
import { Gift, ShieldCheck, BadgeDollarSign } from "lucide-react";

const trustPoints = [
    {
        icon: <Gift size={28} />,
        title: "Free First Class",
        description:
            "Attend the first live AWS session absolutely free. See the quality before you spend a rupee.",
    },
    {
        icon: <ShieldCheck size={28} />,
        title: "Zero Risk",
        description:
            "No advance payment, no hidden charges. You only invest if you feel it's worth continuing.",
    },
    {
        icon: <BadgeDollarSign size={28} />,
        title: "Just ₹999 After That",
        description:
            "If you love the teaching, continue the full course for a student-friendly price of just ₹999.",
    },
];

export default function TrustSection() {
    return (
        <section className="trust" id="trust">
            <div className="container trust__inner">
                <BlurText
                    text="Don't Pay First. Experience First."
                    className="trust__headline"
                    delay={100}
                    animateBy="words"
                    direction="top"
                />
                <p className="trust__subtext reveal">
                    We believe students should invest only after they see value.
                    This removes fear instantly.
                </p>

                <div className="trust__points">
                    {trustPoints.map((point, i) => (
                        <div
                            key={i}
                            className="trust__point reveal"
                            style={{ transitionDelay: `${i * 0.1}s` }}
                        >
                            <div className="trust__point-icon">{point.icon}</div>
                            <h3 className="trust__point-title">{point.title}</h3>
                            <p className="trust__point-desc">{point.description}</p>
                        </div>
                    ))}
                </div>

                <div className="trust__cta reveal">
                    <a href="#register" className="btn btn-primary btn-lg">
                        Register for Free Demo Class
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="5" y1="12" x2="19" y2="12" />
                            <polyline points="12 5 19 12 12 19" />
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    );
}
