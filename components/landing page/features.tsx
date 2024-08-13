import Image from "next/image"
export default function Features() {
    return(
        <div className="feat" id="">
            <div>
                <hr />
                <h3>Our features</h3>
                <hr />
            </div>
            <p>Take the advantage and leverage on these new features ShortLink got</p>
            
            <div className="feat-flx">
                <div className="feat-flx1">
                    <div>
                        <Image src="/check.png"  alt="" width={36} height={36}/>
                        <p>Shorten and share url</p>   
                    </div>
                    <div>
                        <Image src="/check.png"  alt="" width={36} height={36}/>
                        <p>Generate QR code for your Url</p>   
                    </div>

                    <div>
                        <Image src="/check.png"  alt="" width={36} height={36}/>
                        <p>Track your url performance</p>   
                    </div>
                    <div>
                        <Image src="/check.png"  alt="" width={36} height={36}/>
                        <p>Customize your Url</p>
                    </div>
                </div>

                <div className="feat-flx2">
                    <Image src="/illus2.jpg"  alt="" width={500} height={500}/>
                </div>
            </div>
        </div>
    )
}