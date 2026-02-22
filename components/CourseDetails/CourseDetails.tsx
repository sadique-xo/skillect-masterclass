"use client";

import "./CourseDetails.css";
import { CardSpotlight } from "@/components/ui/card-spotlight";

const courseItems = [
    {
        icon: "📅",
        title: "4 Weeks Duration",
        description:
            "A structured 4-week program covering AWS fundamentals to advanced concepts with hands-on labs.",
        highlights: [
            "Week 1-2: Core AWS Services",
            "Week 3: Advanced Architecture",
            "Week 4: Real Project Deployment",
        ],
    },
    {
        icon: "🕒",
        title: "Flexible Schedule",
        description:
            "Choose between weekend or weekday batches that fit your college or work schedule.",
        highlights: [
            "Weekend & Weekday batches",
            "Recorded sessions for replay",
            "Doubt clearing sessions",
        ],
    },
    {
        icon: "📍",
        title: "Online & Offline",
        description:
            "Attend from anywhere online or join in-person sessions - whatever works best for you.",
        highlights: [
            "Live interactive Zoom classes",
            "In-person option available",
            "Same quality, your choice",
        ],
    },
    {
        icon: "📜",
        title: "Certificate Included",
        description:
            "Get a course completion certificate to add to your resume and LinkedIn profile.",
        highlights: [
            "Industry-recognized certificate",
            "LinkedIn badge included",
            "Portfolio-ready projects",
        ],
    },
    {
        icon: "💻",
        title: "Hands-On Projects",
        description:
            "Build real AWS projects during the course to create a portfolio that impresses recruiters.",
        highlights: [
            "Deploy a live web application",
            "Build serverless APIs",
            "Configure production infra",
        ],
    },
    {
        icon: "🎯",
        title: "Career Guidance",
        description:
            "Get personalized career advice, resume tips, and interview prep included in the course.",
        highlights: [
            "Resume review & optimization",
            "Mock interview sessions",
            "Job referral network access",
        ],
    },
];

const CheckIcon = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="course-card__check-icon"
    >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path
            d="M12 2c-.218 0 -.432 .002 -.642 .005l-.616 .017l-.299 .013l-.579 .034l-.553 .046c-4.785 .464 -6.732 2.411 -7.196 7.196l-.046 .553l-.034 .579c-.005 .098 -.01 .198 -.013 .299l-.017 .616l-.004 .318l-.001 .324c0 .218 .002 .432 .005 .642l.017 .616l.013 .299l.034 .579l.046 .553c.464 4.785 2.411 6.732 7.196 7.196l.553 .046l.579 .034c.098 .005 .198 .01 .299 .013l.616 .017l.642 .005l.642 -.005l.616 -.017l.299 -.013l.579 -.034l.553 -.046c4.785 -.464 6.732 -2.411 7.196 -7.196l.046 -.553l.034 -.579c.005 -.098 .01 -.198 .013 -.299l.017 -.616l.005 -.642l-.005 -.642l-.017 -.616l-.013 -.299l-.034 -.579l-.046 -.553c-.464 -4.785 -2.411 -6.732 -7.196 -7.196l-.553 -.046l-.579 -.034a28.058 28.058 0 0 0 -.299 -.013l-.616 -.017l-.318 -.004l-.324 -.001zm2.293 7.293a1 1 0 0 1 1.497 1.32l-.083 .094l-4 4a1 1 0 0 1 -1.32 .083l-.094 -.083l-2 -2a1 1 0 0 1 1.32 -1.497l.094 .083l1.293 1.292l3.293 -3.292z"
            fill="currentColor"
            strokeWidth="0"
        />
    </svg>
);

export default function CourseDetails() {
    return (
        <section className="course-details" id="course">
            <div className="container">
                <div className="course-details__header">
                    <h2 className="section-title reveal">
                        AWS Fundamentals - Full Course
                    </h2>
                    <div className="reveal">
                        <span className="course-details__price-badge">
                            <span className="course-details__price-original">₹4,999</span>
                            <span className="course-details__price-current">Just ₹999</span>
                            - Student Special Batch
                        </span>
                    </div>
                    <p className="course-details__subtitle reveal">
                        After attending the free demo class, continue your learning journey
                        with our comprehensive course.
                    </p>
                </div>

                <div className="course-cards-grid reveal">
                    {courseItems.map((item, index) => (
                        <CardSpotlight
                            key={index}
                            className="course-card-spotlight"
                            radius={250}
                            color="#1a1a2e"
                        >
                            <div className="course-card__icon-wrapper">
                                <span className="course-card__icon">{item.icon}</span>
                            </div>
                            <p className="course-card__title">
                                {item.title}
                            </p>
                            <p className="course-card__description">
                                {item.description}
                            </p>
                            <ul className="course-card__highlights">
                                {item.highlights.map((highlight, i) => (
                                    <li key={i} className="course-card__highlight-item">
                                        <CheckIcon />
                                        <span>{highlight}</span>
                                    </li>
                                ))}
                            </ul>
                        </CardSpotlight>
                    ))}
                </div>
            </div>
        </section>
    );
}
