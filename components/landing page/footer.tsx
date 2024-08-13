import Image from "next/image"

export default function Footer() {
    return(
        <footer>
            <div className="footer">
                <div className="ft1">
                    <Image src="/logo.png" alt="" width={200} height={80} />
                    <p>Shorten your long url to a more readable and shareable url.</p>
                </div>

                <div className="ft">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Features</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </div>

                <div className="ft">
                    <h3>Useful Links</h3>
                    <ul>
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Terms of Use</a></li>
                        <li><a href="#">Cookie Policy</a></li>
                        <li><a href="#">FAQs</a></li>
                    </ul>
                </div>

                <div className="ft">
                    <h3>Contact Us</h3>
                    <p>ShortLink plc</p>
                    <p>keji.bakare.icloud.com</p>
                </div>
            </div>
        </footer>
    )
}