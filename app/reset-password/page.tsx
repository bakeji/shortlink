import Image from "next/image"
export default function ResetPassword(){
 
    return(
        <div className="rst-pwd">
            <div className="logo">
                <Image src="/logo.png" alt="logo" width={200} height={200} />
            </div>
            <div className="fom">
                        <h1>Forgot Password?</h1>
                        <p> All good. Enter your account’s email address and we’ll send a link to reset your password.</p>

                <form action="">
                <div className="email">
                        <label htmlFor="email">Email Address</label>
                        <input type="email" name="email" id="email" />
                </div>

                <button className="get-strtd">Send Reset Link</button>
                </form>

                <div className="fgt-pwd">
                    <a href="#">Return to Log in</a>
                </div>
            </div>
        </div>
    )

}