import "./Audience.css";
import { GraduationCap, Search, RefreshCw } from "lucide-react";
import { ReactNode } from "react";

const audiences: { number: string; title: string; description: string; icon: ReactNode }[] = [
    {
        number: "01",
        title: "Aspiring Tech Students",
        description:
            "If you're currently pursuing a degree and want to explore future-ready roles in cloud and DevOps, this session is the perfect head start.",
        icon: <GraduationCap size={24} />,
    },
    {
        number: "02",
        title: "Recent Graduates & Job Seekers",
        description:
            "For those actively looking for high-impact roles in IT, this webinar offers clarity, direction, and practical steps to get started.",
        icon: <Search size={24} />,
    },
    {
        number: "03",
        title: "Curious Learners & Career Switchers",
        description:
            "Whether you're simply interested or planning a shift into tech, you'll gain valuable insights into the cloud and DevOps landscape.",
        icon: <RefreshCw size={24} />,
    },
];

export default function Audience() {
    return (
        <section className="section section-alt" id="audience">
            <div className="container">
                <h2 className="section-title reveal">Who Should Attend</h2>
                <p className="section-subtitle reveal">
                    This webinar is designed for anyone ready to take the next step in their tech career
                </p>
                <div className="audience-grid">
                    {audiences.map((item, i) => (
                        <div
                            key={i}
                            className="audience-card reveal"
                            style={{ transitionDelay: `${i * 0.12}s` }}
                        >
                            <div className="audience-card__number">{item.number}</div>
                            <div className="audience-card__icon">{item.icon}</div>
                            <h3 className="audience-card__title">{item.title}</h3>
                            <p className="audience-card__desc">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
