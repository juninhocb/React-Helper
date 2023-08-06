function Greetings({name}){

    function generateGreting(someName){
        return `Hello, ${someName}, are you ok?`;
    }

    return (
        <>
            { name && <p>Greetgins: {generateGreting(name)} </p>}
        </>
    )
}

export default Greetings