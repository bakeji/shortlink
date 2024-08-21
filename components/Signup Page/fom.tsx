"use client"
import Image from "next/image"
import React, { useState, useEffect, useContext } from "react"
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import {app} from "../../firebaseConfig";
import { doc, setDoc,} from "firebase/firestore";
import { getFirestore } from "firebase/firestore";
import "firebase/firestore";
import { SignUpContext } from "@/context/signup";
import { useRouter } from "next/navigation";
export default function Form(){

    interface FormDetails {
        email: string
        name: string
        password: string
      }
     
      const {loading, setLoading, setError, setSuccess} =useContext(SignUpContext)
    const [showPassword, setShowPassword] =useState(false)
    const [formData, setFormData]= useState<FormDetails>({
        name: "",
        email: "",
        password: ""

    })
    // create new user
    const router = useRouter()

    const createUser =(event:React.FormEvent<HTMLFormElement>)=>{
        setLoading(true)
        let auth = getAuth(app)
        const db= getFirestore(app)
        event.preventDefault()
        createUserWithEmailAndPassword(auth, formData.email, formData.password)
        .then((response)=>{
            const userData:FormDetails={
                email: formData.email,
                name: formData.name,
                password: formData.password
            }

            return setDoc(doc(db, "users", response.user.uid), userData)
        })
        

        .then(() => {
            setSuccess("Sign up successful")
            setTimeout(() => {
                router.push("/log-in")
            }, 200)
        })
        .catch((error) => {
            setError(error.message)
            setLoading(false)
    });

    
        }


    const handleChange =(event:React.ChangeEvent<HTMLInputElement>)=>{
        setFormData(prev=>{
            return{
                ...prev,
                [event.target.name]:event.target.value
            }
            }
        )

    }

    const togglePassword=(e:React.MouseEvent<HTMLButtonElement>):void =>{
        setShowPassword(prev =>!prev)
        e.preventDefault()
    }

    const IsEmptyOrFalse :boolean=
        Object.values(formData).some(
            (value) => !value)

    return(
        <div className="form">
             <div className="frm-hd">
                    <hr />
                    <h1>Sign Up</h1>
                    <hr />
                </div>
                <p>Already have an account? <a href="log-in">log in</a></p>
            <form onSubmit={createUser}>
               <div className="name">
                    <label htmlFor="name">Full Name</label>
                    <input 
                    type="text" 
                    name="name" 
                    id="name" 
                    onChange={handleChange}
                    required
                    value={formData.name}/>
               </div>

               <div className="email">
                    <label htmlFor="email">Email Address</label>
                    <input 
                    type="email"
                     name="email"
                      id="email"
                      onChange={handleChange}
                      required
                      value={formData.email} />
               </div>

               <div className="pwd">
                    <label htmlFor="pwd">Password</label>
                    <div className="password">
                        <input 
                        type={showPassword? "text": "password"} 
                        name="password"
                         id="pwd"
                         onChange={handleChange}
                         required
                         value={formData.password}
                          />
                       <button type="button" onClick={togglePassword}>
                         <Image src={showPassword? "/Eye.png" : "/EyeSlash.png" } alt="google icon" width={24} height={24} /></button>
                    </div>
                    
               </div>

               <button disabled={IsEmptyOrFalse}
               className={`get-strtd ${IsEmptyOrFalse?  "no-click": "click"}`}>
                                    {loading? <div className="spinner"></div>: "Get Started" }</button>

            </form>
            <small>By signing up, you are automatically agreeing to Comparely’s 
            Terms of Use and Privacy Policy.</small>

        </div>
    )

}