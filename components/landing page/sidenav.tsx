import { PageContext } from '@/context/landPg';
import Image from 'next/image';
import { useContext } from 'react';


export default function SideNav() {
    const {show, setShow} = useContext(PageContext)
    function closeNav(){
        setShow(false)
    }
    return(
    <div className={`side-nav ${show? "show" : "hide"}`} >
        <div className="cls">
            <button onClick={closeNav}>
                <Image src="/close-btn.svg" alt="logo" width={24} height={24} />
            </button>
        </div>

        <div className='nv'>
            <nav className='nav'>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#features">Features</a></li>
                    <li><a href="#contact">Contact</a></li>
                    </ul>
            </nav>

            <div className="lg-sign-up">
                <button><a href="/log-in">Log in</a></button>
                <button><a href="/sign-up">Sign Up</a></button>
            </div>
        </div>
    </div>
    )
    
    
}