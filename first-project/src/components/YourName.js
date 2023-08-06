function YourName({setName}){
    
    return (
        <>
            <p> Say your name: </p>
            <input 
                type="text" 
                placeholder="What is your name?"
                onChange={(e) => setName(e.target.value)}
            />

        </>
    )
}

export default YourName