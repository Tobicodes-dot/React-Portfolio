function Projects() {
    return (
        <section id="projects" className="projects-section">
            <div className="projects-header">
                <h2>My Latest Work</h2>
                <p>A curated collection of projects that showcase my skills and passion for development.</p>
            </div>
            
            <div className="projects-grid">        
                {/* === FEATURED PROJECT: BLACK CARD === */}
                <a href="#link-to-project-1" className="project-card featured-card">
                    <div className="card-content">
                        <span className="project-tag">Full-Stack Development</span>
                        <h3>Project Zenith: E-commerce Platform</h3>
                        <p>A high-performance e-commerce solution built with Next.js, Stripe, and PostgreSQL. Focus on speed and scalability.</p>
                    </div>
                    <div className="cta-arrow">→</div>
                </a>
                
                {/* === STANDARD PROJECT: WHITE CARD 1 === */}
                <a href="#link-to-project-2" className="project-card standard-card">
                    <div className="card-content">
                        <span className="project-tag">UI/UX & Frontend</span>
                        <h3>Crypto Dashboard Redesign</h3>
                        <p>A modern, interactive dashboard focusing on data visualization and accessibility.</p>
                    </div>
                    <div className="cta-arrow">→</div>
                </a>
                
                {/* === STANDARD PROJECT: WHITE CARD 2 === */}
                <a href="#link-to-project-3" className="project-card standard-card">
                    <div className="card-content">
                        <span className="project-tag">Web Scraping & API</span>
                        <h3>Market Data Aggregator</h3>
                        <p>Python-based tool that collects and serves real-time market data via a custom REST API.</p>
                    </div>
                    <div className="cta-arrow">→</div>
                </a>
                
                {/* === STANDARD PROJECT: WHITE CARD 3 === */}
                <a href="#link-to-project-4" className="project-card standard-card">
                    <div className="card-content">
                        <span className="project-tag">App Development</span>
                        <h3>Flutter Fitness Tracker</h3>
                        <p>Cross-platform mobile app for tracking workouts and visualizing user progress.</p>
                    </div>
                    <div className="cta-arrow">→</div>
                </a>
                
            </div>
        </section>
    );
}

export default Projects;