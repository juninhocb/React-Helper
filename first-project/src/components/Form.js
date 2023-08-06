import {useState} from 'react'


function Form(){

    const [name, setName] = useState();
    const [password, setPassword] = useState();

    function registerUser(){
        window.alert("Registered user! " 
        + name + " With password: " + password);

    }

    return (
        <div>
            <h1> Register user! </h1>
            <form onSubmit={registerUser}>
                <div>
                    <label htmlFor="name">Name </label>
                    <input 
                        type="text" 
                        id="name" 
                        placeholder="Place your name" 
                        onChange={(e) => setName(e.target.value)}    
                    />
                </div>
                <div>
                    <label htmlFor="password">Password </label>
                    <input 
                        type="password" 
                        id="password" 
                        placeholder="Password" 
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div>
                    <input type="submit" placeholder="Submit" />
                </div>
            </form>
        </div>
    )
}

export default Form