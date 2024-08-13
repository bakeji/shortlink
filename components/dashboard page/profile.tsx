export default function Profile(){
    return(
        <div className="profile">
            <h1>Profile</h1>
            <div className="pof-pic">
                <h1>KB</h1>
            </div>
           <form action="">
            <div className="name-email">
                <div className="name">
                    <label htmlFor="name">Name</label>
                    <div>
                        <p>Keji Bakare</p>
                    </div>
                </div>

                <div className="email">
                    <label htmlFor="email">Email</label>
                    <div>
                        <p>kejiBakare@gmail.com</p>
                    </div>
                </div>
            </div>

            
           </form>
            <a href="/">Logout</a>
        </div>
    )
}