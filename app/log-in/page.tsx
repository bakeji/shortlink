"use client"
import LogInFom from "@/components/login page/login"
import Image from "next/image"
import React, { useState, useEffect } from "react"
import { LogInContext } from "@/context/login"
import LogInAlert from "@/components/login page/alrt"

export default function SignUP(){
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")
    const [success, setSuccess] = useState("")

    return(
        <LogInContext.Provider value={{loading, setLoading, error, setError, success, setSuccess}} >
        <div className="sign-up">
            <div className="logo">
                <Image src="/logo.png" alt="logo" width={200} height={200} />
            </div>

            <LogInAlert />

            <div className="s-form">
                <LogInFom />
            </div>
        </div>
        </LogInContext.Provider>
    )
}