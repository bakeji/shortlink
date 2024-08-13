import Image from "next/image"
export default function Products() {
    return(
        <div className="products" id="features">
           <div className="prod-hd">
                <h3>Shorten, scan, and analyze. Your all-in-one link management solution.</h3>
                <p>Shorten your link now and start tracking clicks!</p>
           </div>

            <div className="prod">
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
        </div>
    )
}