"use client"
import { PageContext } from '@/context/landPg'
import Image from 'next/image'
import { useContext } from 'react'
export default function Header() {

    const {show, setShow} = useContext(PageContext)
    function openNav(){
        setShow(true)
    }
    return(
        <header>
            <div className="header">
                <div className="logo">
                    <Image src="/cover.png" alt="logo" width={200} height={200} />
                </div>

                <div className="hamburger">
                   <button onClick={openNav}>
                        <Image src="/hamburger-icon.svg" alt="hamburger" width={20} height={20} />
                    </button> 
                </div>

                <nav className='nav'>
                    <ul>
                        <li><a  data-testid="home" href="/">Home</a></li>
                        <li><a  data-testid="About" href="#about">About</a></li>
                        <li><a  data-testid= "features" href="#features">Features</a></li>
                        <li><a  data-testid= "contact" href="#contact">Contact</a></li>
                    </ul>
                </nav>

                <div className="lg-sign-up">
                    <button><a  data-testid="log-in" href="/log-in">Log in</a></button>
                    <button><a  data-testid="sign-up" href="/sign-up">Sign Up</a></button>
                </div>
            </div>
        </header>
    )
}