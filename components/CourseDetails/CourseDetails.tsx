"use client";

import "./CourseDetails.css";
import { HoverEffect } from "@/components/ui/card-hover-effect";

const courseItems = [
    {
        title: "📅 4 Weeks Duration",
        description:
            "A structured 4-week program covering AWS fundamentals to advanced concepts with hands-on labs.",
        link: "#course-duration",
    },
    {
        title: "🕒 Flexible Schedule",
        description:
            "Choose between weekend or weekday batches that fit your college or work schedule.",
        link: "#course-schedule",
    },
    {
        title: "📍 Online & Offline",
        description:
            "Attend from anywhere online or join in-person sessions - whatever works best for you.",
        link: "#course-mode",
    },
    {
        title: "📜 Certificate Included",
        description:
            "Get a course completion certificate to add to your resume and LinkedIn profile.",
        link: "#course-certificate",
    },
    {
        title: "💻 Hands-On Projects",
        description:
            "Build real AWS projects during the course to create a portfolio that impresses recruiters.",
        link: "#course-projects",
    },
    {
        title: "🎯 Career Guidance",
        description:
            "Get personalized career advice, resume tips, and interview prep included in the course.",
        link: "#course-career",
    },
];

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

                <div className="reveal">
                    <HoverEffect items={courseItems} />
                </div>
            </div>
        </section>
    );
}
