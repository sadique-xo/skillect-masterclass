import "./Testimonials.css";

const testimonials = [
    {
        quote:
            "Enrolling in the AWS and DevOps course was transformative. Mentor Jithin's detailed and patient instruction, using real-world scenarios, significantly improved my skills. The hands-on projects and peer interactions enriched my experience and expanded my professional network.",
        name: "Battala Prem Sagar",
        role: "DevOps Engineer",
        company: "LTI Mindtree",
    },
    {
        quote:
            "After completing the DevOps course, I was able to successfully transition from the pharmaceutical industry as a DevOps Engineer. The course content was exceptionally well-curated, not only addressing industry requirements but also equipping me to crack interviews.",
        name: "Kalaichelvan",
        role: "DevOps Engineer",
        company: "Kenvue",
    },
    {
        quote:
            "Joining your curriculum has been one of the best decisions I have made. The exceptional guidance and support provided by our mentor Jithin in my journey towards learning the AWS and DevOps concepts was incredible.",
        name: "Vetry",
        role: "DevOps Engineer",
        company: "ACL Digital",
    },
    {
        quote:
            "This course is highly beneficial for beginners seeking in-depth knowledge in Cloud & DevOps. The course is curated in a way that even beginners can understand the concepts better. It is a must-recommend course for everyone.",
        name: "Prasanna",
        role: "DevOps Engineer",
        company: "Bazaarvoice Technology",
    },
    {
        quote:
            "The exceptional guidance and support provided by our mentor Jithin in my journey towards learning the AWS and DevOps concepts was outstanding. Joining Skillect has been one of the best decisions I have made.",
        name: "Franklin",
        role: "DevOps Engineer",
        company: "FedEx",
    },
];

export default function Testimonials() {
    return (
        <section className="section section-alt" id="testimonials">
            <div className="container">
                <h2 className="section-title reveal">
                    Trusted by Our Students Turned Professionals
                </h2>
                <p className="section-subtitle reveal">
                    Hear from learners who transformed their careers with Skillect
                </p>
                <div className="testimonials-scroll">
                    <div className="testimonials-track">
                        {testimonials.map((t, i) => (
                            <div
                                key={i}
                                className="testimonial-card reveal"
                                style={{ transitionDelay: `${i * 0.1}s` }}
                            >
                                <div className="testimonial-card__quote-icon">
                                    <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" opacity="0.15">
                                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                                    </svg>
                                </div>
                                <p className="testimonial-card__text">&ldquo;{t.quote}&rdquo;</p>
                                <div className="testimonial-card__author">
                                    <div className="testimonial-card__avatar">
                                        {t.name.charAt(0)}
                                    </div>
                                    <div>
                                        <p className="testimonial-card__name">{t.name}</p>
                                        <p className="testimonial-card__role">
                                            {t.role}, {t.company}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
