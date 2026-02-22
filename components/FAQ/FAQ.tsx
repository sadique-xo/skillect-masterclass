"use client";

import { useState } from "react";
import "./FAQ.css";

const faqs = [
    {
        question: "Who can attend this webinar?",
        answer:
            "Anyone interested in learning about Cloud Computing and DevOps can attend — whether you're a student, recent graduate, working professional, or career switcher. No prior technical background is required.",
    },
    {
        question: "Is the webinar free?",
        answer:
            "Yes! This webinar is completely free. There are no hidden charges or commitments. Just register and show up ready to learn.",
    },
    {
        question: "What will I gain from this webinar?",
        answer:
            "You'll gain a clear understanding of AWS & DevOps fundamentals, emerging career trends, real-world use cases, and a practical career kickstart plan — all in one power-packed hour.",
    },
    {
        question: "How can I join the webinar?",
        answer:
            "Simply register using the form on this page. You'll receive a confirmation email and a link to join the live session. You can also join our WhatsApp group for updates.",
    },
    {
        question: "What happens after the webinar?",
        answer:
            "After the webinar, you'll receive access to the session recording and exclusive resources. You'll also learn about our comprehensive Cloud & DevOps training program for those who want to continue their learning journey.",
    },
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="section" id="faq">
            <div className="container">
                <h2 className="section-title reveal">Frequently Asked Questions</h2>
                <p className="section-subtitle reveal">
                    Got questions? We&apos;ve got answers
                </p>
                <div className="faq-list reveal">
                    {faqs.map((faq, i) => (
                        <div
                            key={i}
                            className={`faq-item ${openIndex === i ? "faq-item--open" : ""}`}
                        >
                            <button className="faq-item__question" onClick={() => toggle(i)}>
                                <span>{faq.question}</span>
                                <span className="faq-item__icon">
                                    <svg
                                        width="20"
                                        height="20"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <polyline points="6 9 12 15 18 9" />
                                    </svg>
                                </span>
                            </button>
                            <div className="faq-item__answer">
                                <p>{faq.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
