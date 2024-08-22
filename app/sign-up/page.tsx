"use client"
import React, { useState, useEffect } from "react"
import Form from "@/components/Signup Page/fom"
import Image from "next/image"
import { SignUpContext } from "@/context/signup"
import SignUpAlert from "@/components/Signup Page/alert"
export default function SignUp(){
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")
    const [success, setSuccess] = useState("")

    return(
        <SignUpContext.Provider value={{loading, setLoading, error, setError, success, setSuccess}}>
        <div className="sign-up">
            <div className="logo">
                <Image src="/logo.png" alt="logo" width={200} height={200} />
            </div>

            <SignUpAlert />

            <div className="s-form">
                <Form />
            </div>
        </div>
        </SignUpContext.Provider>
       
    )
}