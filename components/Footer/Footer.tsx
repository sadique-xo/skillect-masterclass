import "./Footer.css";

export default function Footer() {
    return (
        <footer className="footer">
            <div className="container footer__inner">
                <div className="footer__brand">
                    <a href="#" className="footer__logo">
                        <img
                            src="/images/logo/skillect-logo.png"
                            alt="Skillect Logo"
                            className="footer__logo-light"
                        />
                        <img
                            src="/images/logo/icon-dark.png"
                            alt="Skillect Logo"
                            className="footer__logo-dark"
                        />
                    </a>
                    <p className="footer__tagline">
                        Empowering careers in Cloud & DevOps through expert-led mentorship.
                    </p>
                </div>

                <div className="footer__links">
                    <h4 className="footer__links-title">Quick Links</h4>
                    <a href="#learn" className="footer__link">What You&apos;ll Learn</a>
                    <a href="#why" className="footer__link">Why It Matters</a>
                    <a href="#mentor" className="footer__link">Mentor</a>
                    <a href="#faq" className="footer__link">FAQ</a>
                    <a href="#register" className="footer__link">Register</a>
                </div>

                <div className="footer__links">
                    <h4 className="footer__links-title">Connect</h4>
                    <a
                        href="https://chat.whatsapp.com/LIAQx0QiK5j0gRhM5L9SSb"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="footer__link"
                    >
                        WhatsApp Group
                    </a>
                </div>
            </div>

            <div className="footer__bottom">
                <div className="container">
                    <p className="footer__copyright">
                        © {new Date().getFullYear()} Skillect. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
