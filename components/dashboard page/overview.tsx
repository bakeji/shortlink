import Image from "next/image"
export default function Overview(){
    return(
        <div className="overview">
                <div className="prod1">
                    <Image src="/link.png"  alt="" width={20} height={20}/>
                    <h4>URL Shortener</h4>
                </div>

                <div className="prod1">
                    <Image src="/brand.png"  alt="" width={20} height={20}/> 
                    <h4>Custom URL</h4>
                </div>

                <div className="prod1">
                    <Image src="/qrcode.png"  alt="" width={20} height={20}/> 
                    <h4>QR Code</h4>
                </div>

                <div className="prod1">
                    <Image src="/analytics.png"  alt="" width={20} height={20}/> 
                    <h4>Analytics</h4>
                </div>
        </div>

    )
}