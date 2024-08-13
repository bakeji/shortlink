"use client"
import Image from "next/image"
import React, { useContext, useState } from "react"
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { LogInContext } from "@/context/login";
import {app} from "../../firebaseConfig";
import { useRouter } from "next/navigation";

export default function LogInFom(){
    interface users{
        email: "",
        password: ""
    }
    const {loading, setLoading,  setError,  setSuccess} = useContext(LogInContext)
    const [showPassword, setShowPassword] =useState(false)
    const [usersDetails, setUsersDetails] = useState<users>({
        email:"",
        password: ""
    })
    
    const handleChange =(event: React.ChangeEvent<HTMLInputElement>)=>{
        setUsersDetails(prev =>{
            return{
                ...prev,
                [event?.target.name]: event?.target.value
            }
        })
    }

    const togglePassword=() =>{
        setShowPassword(prev =>!prev)
    }

    const IsEmptyOrFalse :boolean=
        Object.values(usersDetails).some(
            (value) => !value)

    const router= useRouter()

    const SignIn =(event:React.FormEvent<HTMLFormElement>)=>{
        setLoading(true)
        event.preventDefault()
        const auth = getAuth(app);
        signInWithEmailAndPassword(auth, usersDetails.email, usersDetails.password)
        .then((userCredential) => {
            const user = userCredential.user;
            setSuccess("log in sucessful")
            setTimeout(()=>{
                router.push("/")
            }, 200)
        })
        .catch((error) => {
            setError(error.message)
            setLoading(false)
  });
    }

   
    return(
        <div className="form">
              <div className="frm-hd">
                    <hr />
                    <h1>Log In</h1>
                    <hr />
                </div>
                <p>Don’t have an account? <a href="sign-up">Sign up</a></p>
            <form onSubmit={SignIn} >
            <button className="gg"><Image src="/google.png" alt="google icon" width={24} height={24} />Continue with Google</button>

               <div className="email">
                    <label htmlFor="email">Email Address</label>
                    <input
                     type="email" 
                     name="email" 
                     id="email"
                     value={usersDetails.email}
                     onChange={handleChange}
                     required />
               </div>


               <div className="pwd">
                    <label htmlFor="pwd">Password</label>
                    <div className="password">
                        <input
                         type={showPassword? "text" : "password"}
                         name="password"
                          id="pwd" 
                          value={usersDetails.password}
                     onChange={handleChange}
                     required

                         />
                       <button onClick={togglePassword}>
                         <Image src={showPassword? "/Eye.png" : "/EyeSlash.png" } alt="google icon" width={24} height={24} /></button>
                    </div>
                    
               </div>

               <button disabled={IsEmptyOrFalse} className={`get-strtd ${IsEmptyOrFalse? "no-click": "click"}`}>
               {loading? <div className="spinner"></div>: "Continue"}</button>
            </form>
            <div className="fgt-pwd">
                <a href="#">forgot password</a>
            </div>
        </div>
    )

}