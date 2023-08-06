function Form(){

    function userRegister(){
        window.alert("Registered user");
    }

    return (
        <div>
            <h1> My register!</h1>
            <form onSubmit= {userRegister} >
                <div>
                    <input type="text" placeholder="Place your name" />
                </div>
                <div>
                    <input type="submit" placeholder="Register" />
                </div>
            </form>
        </div> 
    )
}

export default Form