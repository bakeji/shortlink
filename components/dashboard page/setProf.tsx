"use client"
import Image from "next/image"
import { getAuth, signOut } from "firebase/auth"
export default function SetProf(){

  function logOut(){
    const auth = getAuth();
    signOut(auth).then(() => {
      console.log("Logged out")
    })

  }

    



    return(
        <div className="set-pof">
          {/* <button> <Image src="/set.svg" alt="setting" width={24} height={24}/> Settings </button> */}

          <button onClick={logOut}> <Image src="/logout.svg" alt="logout" width={24} height={24}/> Logout</button>
        </div>
    )
}