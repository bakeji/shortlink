import Image from "next/image"
export default function Benefits() {
    return(
        <div className="chs-div">
            <div className="chs">
                <div className="chs-hd">
                    <hr />
                    <h3> Why choose Us</h3>
                    <hr />
                </div>

                <div className="rsns">
                    <div className="rsn">
                        <div>
                            <Image src="/fast.png"  alt="" width={120} height={120}/>
                        </div>
                        <p>Fast and Reliable</p>
                    </div>

                    <div className="rsn">
                        <div>
                            <Image src="/safe.png"  alt="" width={120} height={120}/>
                        </div>
                        <p>Secure and safe</p>
                    </div>

                    <div className="rsn">
                        <div>
                            <Image src="/easy.png"  alt="" width={120} height={120}/>
                        </div>
                        <p>Easy to use</p>
                    </div>


                </div>
            </div>
        </div>
    )
}