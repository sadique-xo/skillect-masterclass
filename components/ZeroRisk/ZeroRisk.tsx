import "./ZeroRisk.css";
import { Check } from "lucide-react";
import { WarpBackground } from "@/components/ui/warp-background";

const benefits = [
    "Zero Risk - Try before you commit",
    "No Advance Payment - Pay only after the free class",
    "Transparent Teaching - See the quality firsthand",
    "Affordable Pricing - Full course at just ₹999",
    "Career-Focused Learning - Skills that get you hired",
];

export default function ZeroRisk() {
    return (
        <section id="zero-risk">
            <WarpBackground className="zero-risk w-full overflow-hidden border-none rounded-none">
                <div className="container zero-risk__inner">
                    <h2 className="section-title reveal">
                        Why Students Love This Model
                    </h2>
                    <p className="section-subtitle reveal">
                        We&apos;ve designed a student-first approach that puts your trust above everything
                    </p>

                    <div className="zero-risk__list">
                        {benefits.map((benefit, i) => (
                            <div
                                key={i}
                                className="zero-risk__item reveal"
                                style={{ transitionDelay: `${i * 0.08}s` }}
                            >
                                <div className="zero-risk__check">
                                    <Check size={20} strokeWidth={3} />
                                </div>
                                <span className="zero-risk__text">{benefit}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </WarpBackground>
        </section>
    );
}
