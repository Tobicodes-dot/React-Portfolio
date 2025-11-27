import { Instagram, Github, Linkedin, Twitter } from "lucide-react";

function Footer () {
    return (
        <section id="contact" className="contact-section">
            <div className="contact-left">
                <h3 className="contact-subtitle">Let’s</h3>
                <h1 className="contact-title">Connect</h1>

                <h2 className="contact-name">TobiCodes</h2>

                <div className="contact-details">
                    <h4>Email Address</h4>
                    <p><a href="mailto:tobicodes@gmail.com">tobicodes@gmail.com</a></p>
                    <p><a href="mailto:adurojamoyosoreoluwa@gmail.com">adurojamoyosoreoluwa@gmail.com</a></p>

                    <h4>Phone Number</h4>
                    <p><a href="tel:+234 90 7727 6277">+234 90 7727 6277</a></p>
                </div>
            </div>

            <div className="contact-right">
                <h4>Find me online</h4>
                <div className="social-links">

                    <a href="https://instagram.com" target="_blank" className="social-icon">
                        <Instagram />
                    </a>

                    <a href="https://github.com" target="_blank" className="social-icon">
                        <Github />
                    </a>

                    <a href="https://linkedin.com" target="_blank" className="social-icon">
                        <Linkedin />
                    </a>

                    <a href="https://x.com" target="_blank" className="social-icon">
                        <Twitter />
                    </a>

                </div>
            </div>
        </section>
    );
}

export default Footer;