import Button from "./widgets/Button";

function Event(){

    function clickFunc(){
        window.alert("Trigered");
    }

    function myEvent(){
        window.alert("Event trigered");
    }

    function secondEvent(){
        window.alert("Second event trigered");
    }

    return (
        <>
            <p> You can trig the event, click above</p>
            <Button event={myEvent} text="First event" />
            <Button event={secondEvent} text="Second event" />
            <button onClick={clickFunc}>Click-me</button>
        </>
    )
}

export default Event