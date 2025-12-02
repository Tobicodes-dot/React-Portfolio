import michael from "../assets/michael.png";

function Hero() {
    return (
        <div className="hero">
            <div className="hero-content">
                <div className="hero-left">
                    <div className="name-block">
                        <h2 className="greeting">Hi, I'm</h2>
                        <h1 className="full-name">
                            Aduroja <br /> Moyosore-Oluwa <br /> Michael
                        </h1>
                        <h2 className="profession">Software Developer</h2>
                    </div>
                </div>
                
                <div className="hero-right">
                    <div className="image-wrapper">
                        <img src={michael} alt="Profile" className="hero-photo" />
                        <div className="photo-blur-bg"></div>
                    </div>
                </div>


            </div>
            <div className="hero-arrow">
                <div className="scroll-wrapper">
                    <span className="scroll-left">SCROLL</span>
                    <span className="scroll-right">DOWN</span>
                </div>
            </div>
        </div>
        
    );
}

export default Hero;