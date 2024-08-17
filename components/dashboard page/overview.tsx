import Image from "next/image"
import ShortenUrl from "./shortUrl"
import CustomizeUrl from "./customizedLinks"
import QrCode from "./qrCode"
import MyLinks from "./myLinks"
export default function Overview(){
    return(
        <div className="overview">
                <div className="prod1">
                    <Image src="/link.png"  alt="" width={20} height={20}/>
                    <div className="h4">
                        <ShortenUrl />
                    </div>
                </div>

                <div className="prod1">
                    <Image src="/brand.png"  alt="" width={20} height={20}/> 
                    <div className="h4">
                        <CustomizeUrl />
                    </div>
                </div>

                <div className="prod1">
                    <Image src="/qrcode.png"  alt="" width={20} height={20}/> 
                    <div className="h4">
                        <QrCode />
                    </div>
                </div>

                <div className="prod1">
                    <Image src="/analytics.png"  alt="" width={20} height={20}/> 
                    <div className="h4">
                        <MyLinks />
                    </div>
                </div>
        </div>

    )
}