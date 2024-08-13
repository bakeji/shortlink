import Image from "next/image"
export default function SetProf(){
    return(
        <div className="set-pof">
          <button> <Image src="/set.svg" alt="setting" width={24} height={24}/> Settings </button>

          <button> <Image src="/logout.svg" alt="logout" width={24} height={24}/> Logout</button>
        </div>
    )
}