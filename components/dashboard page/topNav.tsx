import Image from 'next/image'
export default function TopNav(){
    return(

        <div className="topNav">
            <div className="search">
                <Image src="/search.svg" alt="search" width={20} height={20}/>
                <input type="search" placeholder='search' />
            </div>

           

            <div className="prof-not">
                <div className="notification">
                    <button><Image src="/notification.svg" alt="search" width={24} height={24}/></button>
                </div>
                <div className="avi-cont">
                    <div className="avi">
                        <h1>KB</h1>
                    </div>
                    <button><Image src="/arrow-down.png" alt="arrow-down" width={20} height={20} /></button>
                    
                </div>
                
            </div>


        </div>
    )
}