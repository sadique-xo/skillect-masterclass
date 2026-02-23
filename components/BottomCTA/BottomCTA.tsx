"use client";

import { useState, useEffect } from "react";
import "./BottomCTA.css";
import { format } from "date-fns";

export default function BottomCTA() {
    const [webinarDate, setWebinarDate] = useState<string>("Loading...");
    const [webinarTime, setWebinarTime] = useState<string>("Loading...");

    useEffect(() => {
        const fetchDate = async () => {
            try {
                const res = await fetch('/api/webinar-date');
                const data = await res.json();
                const d = new Date(data.date);
                setWebinarDate(format(d, "EEEE, d MMMM yyyy"));
                // Format something like "4 PM - 5 PM" roughly based on the time
                const startHour = format(d, "h:mm a");
                const dEnd = new Date(d);
                dEnd.setHours(d.getHours() + 1);
                const endHour = format(dEnd, "h:mm a");
                setWebinarTime(`${startHour} - ${endHour}`);
            } catch (e) {
                console.error("Failed to fetch date", e);
                setWebinarDate("Sunday, 1 March 2026");
                setWebinarTime("4:00 PM - 5:00 PM");
            }
        };
        fetchDate();
    }, []);

    return (
        <section className="bottom-cta" id="register">
            <div className="bottom-cta__bg">
                <div className="bottom-cta__shape bottom-cta__shape--1"></div>
                <div className="bottom-cta__shape bottom-cta__shape--2"></div>
            </div>
            <div className="container bottom-cta__inner">
                <div className="bottom-cta__content reveal">
                    <h2 className="bottom-cta__title">
                        Register Now for Free to Unlock Your Future in Cloud & DevOps
                    </h2>
                    <div className="bottom-cta__meta">
                        <div className="bottom-cta__meta-item">
                            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
                            <span>{webinarTime}</span>
                        </div>
                        <div className="bottom-cta__meta-item">
                            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></svg>
                            <span>{webinarDate}</span>
                        </div>
                    </div>
                </div>

                <div className="bottom-cta__form reveal">
                    <div className="bottom-cta__form-wrapper">
                        <iframe
                            data-tally-src="https://tally.so/embed/w4RE0o?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
                            loading="lazy"
                            width="100%"
                            height="431"
                            frameBorder="0"
                            marginHeight={0}
                            marginWidth={0}
                            title="Unlock Your Future in Cloud & DevOps"
                        ></iframe>
                    </div>
                    <div className="bottom-cta__whatsapp">
                        <a
                            href="https://chat.whatsapp.com/LIAQx0QiK5j0gRhM5L9SSb"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-outline bottom-cta__whatsapp-btn"
                        >
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
                            Join WhatsApp Group for Updates
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
