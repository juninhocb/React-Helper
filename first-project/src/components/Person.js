function Person({img, name, age, city}){
    return (
        <div>
            <img src={img} alt="My image"></img>
            <h2>Name: {name}</h2>
            <p>Age: {age}</p>
            <p>City: {city}</p>
        </div>
    )
}

export default Person