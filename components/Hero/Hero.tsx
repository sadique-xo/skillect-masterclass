import "./Hero.css";
import { CanvasText } from "@/components/ui/canvas-text";

export default function Hero() {
    return (
        <section className="hero" id="hero">
            <div className="hero__bg-shapes">
                <div className="hero__shape hero__shape--1"></div>
                <div className="hero__shape hero__shape--2"></div>
                <div className="hero__shape hero__shape--3"></div>
            </div>
            <div className="container hero__container">
                {/* Left Content */}
                <div className="hero__content">
                    <div className="hero__badge">
                        <span className="hero__badge-icon">🔥</span>
                        Free Webinar - Reserve Your Spot Today
                    </div>

                    <h1 className="hero__title">
                        <span className="hero__title-line">
                            Your{" "}
                            <CanvasText
                                text="Cloud & DevOps"
                                backgroundClassName="bg-blue-600 dark:bg-blue-700"
                                colors={[
                                    "rgba(0, 153, 255, 1)",
                                    "rgba(0, 153, 255, 0.9)",
                                    "rgba(0, 153, 255, 0.8)",
                                    "rgba(0, 153, 255, 0.7)",
                                    "rgba(0, 153, 255, 0.6)",
                                    "rgba(0, 153, 255, 0.5)",
                                    "rgba(0, 153, 255, 0.4)",
                                    "rgba(0, 153, 255, 0.3)",
                                    "rgba(0, 153, 255, 0.2)",
                                    "rgba(0, 153, 255, 0.1)",
                                ]}
                                lineGap={4}
                                animationDuration={20}
                            />
                        </span>
                        <span className="hero__title-line">Career Starts Here</span>
                    </h1>

                    <div className="hero__meta">
                        <div className="hero__meta-item">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
                            <span>4 PM – 5 PM</span>
                        </div>
                        <div className="hero__meta-item">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></svg>
                            <span>Sunday, 1 March 2026</span>
                        </div>
                    </div>

                    <p className="hero__description">
                        A free, no-fluff webinar that gives you a clear roadmap to break into cloud - from the skills that matter to the jobs that pay.
                    </p>

                    <div className="hero__actions">
                        <a href="#register" className="btn btn-primary btn-lg">
                            Save My Free Spot
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
                        </a>
                        <a
                            href="https://chat.whatsapp.com/LIAQx0QiK5j0gRhM5L9SSb"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-outline"
                        >
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
                            Join WhatsApp Group
                        </a>
                    </div>

                    <div className="hero__stats">
                        <div className="hero__stat">
                            <span className="hero__stat-number">500+</span>
                            <span className="hero__stat-label">Students Trained</span>
                        </div>
                        <div className="hero__stat-divider"></div>
                        <div className="hero__stat">
                            <span className="hero__stat-number">8+</span>
                            <span className="hero__stat-label">Years Experience</span>
                        </div>
                        <div className="hero__stat-divider"></div>
                        <div className="hero__stat">
                            <span className="hero__stat-number">FREE</span>
                            <span className="hero__stat-label">No Cost at All</span>
                        </div>
                    </div>
                </div>

                {/* Right - Video */}
                <div className="hero__media">
                    <div className="hero__video-wrapper">
                        <div className="hero__video-container">
                            <video
                                className="hero__video"
                                src="/video/Skillect Intro.mp4"
                                controls
                                playsInline
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
