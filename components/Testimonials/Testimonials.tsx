import "./Testimonials.css";
import { Marquee } from "@/components/ui/marquee";

const testimonials = [
    {
        quote: "Enrolling in the AWS and DevOps course was transformative. Mentor Jithin's detailed and patient instruction, using real-world scenarios, significantly improved my skills. The hands-on projects and peer interactions enriched my experience and expanded my professional network.",
        name: "Battala Prem Sagar",
        role: "DevOps Engineer",
        company: "LTI Mindtree",
        image: "/images/avatar/Battala Prem Sagar Medium Small.jpeg"
    },
    {
        quote: "After completing the DevOps course, I was able to successfully transition from the pharmaceutical industry as a DevOps Engineer. The course content was exceptionally well-curated, not only addressing industry requirements but also equipping me to crack interviews.",
        name: "Kalaichelvan",
        role: "DevOps Engineer",
        company: "Kenvue",
        image: "/images/avatar/Kalaichelvan   Medium Small.jpeg"
    },
    {
        quote: "Joining your curriculum has been one of the best decisions I have made. The exceptional guidance and support provided by our mentor Jithin in my journey towards learning the AWS and DevOps concepts was incredible.",
        name: "Vetry",
        role: "DevOps Engineer",
        company: "ACL Digital",
        image: "/images/avatar/Vetry Medium Small.jpeg"
    },
    {
        quote: "This is to express my heartfelt appreciation for the exceptional guidance and support provided by our mentor Jithin in my journey towards learning the AWS and Devops concepts. Joining your curriculum has been one of the best decisions I have made.",
        name: "Franklin",
        role: "DevOps Engineer",
        company: "Fedex",
        image: ""
    },
    {
        quote: "This course is highly beneficial for beginners seeking in-depth knowledge in Cloud & DevOps. The course is curated in a way that even beginners can understand the concepts better. It is a must-recommend course for everyone.",
        name: "Prasanna",
        role: "DevOps Engineer",
        company: "Bazaarvoice Technology",
        image: ""
    },
    {
        quote: "The practical approach to real-world cloud infrastructure problems was exactly what I needed to advance my career. The hands-on labs are unparalleled.",
        name: "Sarah Jenkins",
        role: "Senior Cloud Architect",
        company: "TechNova",
        image: ""
    },
    {
        quote: "I couldn't recommend this masterclass enough. Jithin's expertise in Kubernetes and CI/CD pipelines demystified concepts I've struggled with for months.",
        name: "Michael Chen",
        role: "Site Reliability Engineer",
        company: "DataScale",
        image: ""
    },
    {
        quote: "An incredible learning experience that bridged the gap between theory and actual enterprise implementation. Finding a community this supportive is rare.",
        name: "Priya Sharma",
        role: "DevOps Consultant",
        company: "CloudFrontier",
        image: ""
    },
    {
        quote: "The Terraform modules and AWS automation projects gave me the confidence to lead our infrastructure migration right after finishing the course.",
        name: "David O'Connor",
        role: "Systems Engineer",
        company: "FinTech Solutions",
        image: ""
    },
    {
        quote: "Transformational is an understatement. The deep dive into Docker and microservices architecture was clearly structured and highly applicable to my daily work.",
        name: "Amira Hassan",
        role: "Cloud Platform Engineer",
        company: "RetailSys",
        image: ""
    },
];

const TestimonialCard = ({
    quote,
    name,
    role,
    company,
    image,
}: {
    quote: string;
    name: string;
    role: string;
    company: string;
    image: string;
}) => {
    return (
        <div className="testimonial-card flex flex-col h-full">
            <div className="testimonial-card__quote-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" opacity="0.15">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
            </div>
            <p className="testimonial-card__text">&ldquo;{quote}&rdquo;</p>
            <div className="testimonial-card__author mt-auto">
                {image ? (
                    <img className="testimonial-card__avatar object-cover" alt={name} src={image} />
                ) : (
                    <div className="testimonial-card__avatar">
                        {name.charAt(0)}
                    </div>
                )}
                <div>
                    <p className="testimonial-card__name">{name}</p>
                    <p className="testimonial-card__role">
                        {role}, {company}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default function Testimonials() {
    return (
        <section className="section section-alt overflow-hidden" id="testimonials">
            <div className="container" style={{ paddingBottom: "2rem" }}>
                <h2 className="section-title reveal">
                    Trusted by Our Students Turned Professionals
                </h2>
                <p className="section-subtitle reveal">
                    Hear from learners who transformed their careers with Skillect
                </p>
            </div>

            <div className="relative flex w-full flex-col items-center justify-center overflow-hidden pb-12">
                <Marquee pauseOnHover className="[--duration:60s] [--gap:2rem]">
                    {testimonials.map((review, i) => (
                        <TestimonialCard key={review.name + i} {...review} />
                    ))}
                </Marquee>
                <div className="pointer-events-none absolute inset-y-0 left-0 w-[15%] bg-gradient-to-r from-[--background] to-transparent"></div>
                <div className="pointer-events-none absolute inset-y-0 right-0 w-[15%] bg-gradient-to-l from-[--background] to-transparent"></div>
            </div>
        </section>
    );
}
