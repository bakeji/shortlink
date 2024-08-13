import Image from 'next/image'
export default function HeroSection() {
    return(
        <div className="hero-sect" id='about'>
            <div className="hero-sect__content">
                <h1>The best tools for  shortening links, QR Codes and analytics</h1>
                <p>Shorten and personalize any link</p>
                <button>Get Started</button>
            </div>

            <div className="hero-sect-img">
                <Image src="/illus1.png" alt="hero section image" width={548} height={517} />
            </div>
        </div>
    )
}