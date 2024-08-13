import Image from 'next/image'
export default function Header() {
    return(
        <header>
            <div className="header">
                <div className="logo">
                    <Image src="/logo.png" alt="logo" width={200} height={200} />
                </div>
                <nav className='nav'>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#features">Features</a></li>
                        <li><a href="#contact">Contact</a></li>
                        </ul>
                </nav>

                <div className="lg-sign-up">
                    <button><a href="/log-in">Log in</a></button>
                    <button><a href="/sign-up">Sign Up</a></button>
                </div>
            </div>
        </header>
    )
}