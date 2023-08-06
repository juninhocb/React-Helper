function TeamsList({itens}){
    return (
        <>
            <h3>List of teams</h3>
            {   
                itens.length > 0 ? 
                itens.map((team, index) => 
                    <p key={index}>{team}</p>
                ) : <p>No itens found</p>
            }
        </>
    )
}

export default TeamsList