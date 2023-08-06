import Item from "./Item"

function List(){
    return (
        <>
            <h1> My List of teams </h1>
            <ul>
                <Item team="palmeiras"/>
                <Item  team="atlético-mg"/>
                <Item team="grêmio"/>
            </ul>
        </>
    )
}

export default List