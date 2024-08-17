import Image from "next/image"
import SetProf from "./setProf"
import ShortenUrl from "./shortUrl"
import CustomizeUrl from "./customizedLinks"
import QrCode from "./qrCode"
import MyLinks from "./myLinks"
export default function SideBar(){
    return(
        <div className="side-bar">
            <div>
                <div className="logo-sd">
                    <Image src="/cover.png" alt="logo" width={200} height={200} />
                </div>

                <div className="dash-nav">

                    <div className="dsh">
                         <a href="/dashboard">
                             <Image src="/dsh.svg" alt="dashboard icon" width={16} height={20} />
                        Dashboard</a>
                    </div>

                    <div className="lnk">
                       <MyLinks />
                    </div>

                    <div className="lnk">
                        <ShortenUrl />
                    </div>

                    <div className="lnk">
                        <QrCode/>
                    </div>


                    <div className="lnk">
                        <CustomizeUrl />
                    </div>
                </div>
            </div>
            <SetProf />
        </div>
    )
}