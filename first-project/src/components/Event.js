function Event({number}){

    function myEvent(e){
        e.preventDefault()
        window.alert("Im active!" + number);
    }

    return (
        <>
            <p> Active the button! click on it </p>
            <button onClick={myEvent}> Click-me </button>
        </>
    )
}

export default Event