function Experience() {
    return (
        <section id="experience" className="experience-section">
            <div className="exp-left">
                <h3 className="exp-subtitle">My Journey</h3>
                <h2 className="exp-title">
                    Experience That<br /> Shaped My Craft.
                </h2>
            </div>

            <div className="exp-right">
                <div className="timeline-line"></div>

                <div className="exp-card">
                    <span className="exp-year">2023 — 2024</span>
                    <h3 className="exp-role">UI/UX Designer — Techies</h3>
                    <p>
                        Designed intuitive user interfaces, improved product usability,
                        and collaborated closely with dev teams to ship smooth user experiences.
                    </p>
                </div>

                <div className="exp-card dark">
                    <span className="exp-year">2024 — Present</span>
                    <h3 className="exp-role">Web Developer — Anachambers</h3>
                    <p>
                        Building full-scale web solutions, improving system architecture,
                        and developing high-performance features used by hundreds daily.
                    </p>
                </div>

                <div className="exp-card">
                    <span className="exp-year">Freelance</span>
                    <h3 className="exp-role">Frontend Developer</h3>
                    <p>
                        Creating responsive websites, solving client problems,
                        and delivering modern web interfaces for different industries.
                    </p>
                </div>
            </div>
        </section>


    );
}

export default Experience;