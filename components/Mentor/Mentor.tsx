import Image from "next/image";
import "./Mentor.css";

const tags = [
    "AWS & DevOps Certified",
    "CI/CD Practitioner",
    "Infrastructure as Code (IaC)",
    "Cloud-Native Architect",
    "8+ Years in Data & DevOps",
    "Mentor to 500+ Learners",
];

export default function Mentor() {
    return (
        <section className="section" id="mentor">
            <div className="container">
                <h2 className="section-title reveal">Meet Your Mentor</h2>
                <p className="section-subtitle reveal">
                    Learn from someone who&apos;s been in the trenches
                </p>

                <div className="mentor-card reveal">
                    {/* Photo side */}
                    <div className="mentor-card__photo">
                        <div className="mentor-card__photo-wrapper">
                            <Image
                                src="/images/Jithin Medium.png"
                                alt="Jithin Kannan"
                                width={220}
                                height={220}
                                className="mentor-card__image"
                            />
                        </div>
                    </div>

                    {/* Info side */}
                    <div className="mentor-card__info">
                        <h3 className="mentor-card__name">Jithin Kannan</h3>
                        <p className="mentor-card__role">
                            Founder, Skillect · DevOps & Cloud Specialist
                        </p>
                        <p className="mentor-card__bio">
                            Jithin Kannan has over eight years of experience across DevOps,
                            AWS, Azure, Kubernetes, Cassandra, and Python. As the founder of
                            Skillect, he brings a deep, real-world understanding of cloud and
                            data systems, having worked in key roles at Mavenir and Cognizant.
                            Through his mentorship and content, he helps professionals grow
                            with practical skills, career strategy, and the mindset needed to
                            thrive in modern tech roles.
                        </p>
                        <div className="mentor-card__tags">
                            {tags.map((tag, i) => (
                                <span key={i} className="mentor-card__tag">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
