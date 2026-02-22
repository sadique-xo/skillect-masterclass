"use client";

import { useState, useEffect } from "react";
import "./CountdownBanner.css";
import Counter from "@/components/Counter";

// Target: Sunday, 1 March 2026, 4:00 PM IST (UTC+5:30)
const TARGET_DATE = new Date("2026-03-01T10:30:00Z"); // 4 PM IST = 10:30 UTC

function getTimeRemaining() {
    const now = new Date().getTime();
    const diff = TARGET_DATE.getTime() - now;

    if (diff <= 0) {
        return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((diff % (1000 * 60)) / 1000),
    };
}

export default function CountdownBanner() {
    const [time, setTime] = useState<ReturnType<typeof getTimeRemaining> | null>(null);

    useEffect(() => {
        // Set initial value on client to avoid hydration mismatch
        setTime(getTimeRemaining());
        const interval = setInterval(() => {
            setTime(getTimeRemaining());
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    const display = time ?? { days: 0, hours: 0, minutes: 0, seconds: 0 };

    const units = [
        { value: display.days, label: "Days" },
        { value: display.hours, label: "Hours" },
        { value: display.minutes, label: "Minutes" },
        { value: display.seconds, label: "Seconds" },
    ];

    return (
        <section className="countdown" id="countdown">
            <div className="container countdown__inner">
                <p className="countdown__label reveal">Next Free Session</p>
                <h2 className="countdown__title reveal">
                    Limited Seats - Small Batch for Better Guidance
                </h2>

                <div className="countdown__timer reveal">
                    {units.map((unit, i) => (
                        <div key={unit.label} style={{ display: "flex", alignItems: "flex-start" }}>
                            <div className="countdown__unit">
                                <div className="countdown__number">
                                    <Counter
                                        value={unit.value}
                                        fontSize={36}
                                        padding={0}
                                        gap={2}
                                        textColor="white"
                                        fontWeight="800"
                                        places={[10, 1]}
                                        gradientHeight={0}
                                        gradientFrom="transparent"
                                        gradientTo="transparent"
                                    />
                                </div>
                                <span className="countdown__unit-label">{unit.label}</span>
                            </div>
                            {i < units.length - 1 && (
                                <span className="countdown__separator">:</span>
                            )}
                        </div>
                    ))}
                </div>

                <p className="countdown__urgency reveal">
                    <span className="countdown__urgency-dot" />
                    Only serious students should register
                </p>

                <a href="#register" className="countdown__cta reveal">
                    Book Your FREE First Class Now
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="5" y1="12" x2="19" y2="12" />
                        <polyline points="12 5 19 12 12 19" />
                    </svg>
                </a>
            </div>
        </section>
    );
}
