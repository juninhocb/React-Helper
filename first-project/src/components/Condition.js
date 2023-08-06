import { useState } from "react"


function Condition(){

    const [email, setEmail] = useState();
    const [userEmail, setUserEmail] = useState();

    function sendEmail(e){
        e.preventDefault(); 
        setUserEmail(email); 
    }

    function clearEmail(){
        setEmail("");
        setUserEmail("");
    }
    
    return (
        <div>
            <h2>Register your email!</h2>
            <form>
                <input 
                    type="email" 
                    value={email}
                    placeholder="Place your e-mail" 
                    onChange={(e) => setEmail(e.target.value)} />
                <button onClick={sendEmail} > Send email </button>
            </form>

            {userEmail && (
                <div> 
                        <p>Print user email {userEmail}</p>
                        <button onClick={clearEmail} >Clear</button>
                </div>
            )}
            

        </div>
    )
}

export default Condition