import Item from "./Item"

function List(){
    return (
        <>
            <h1> My List of teams </h1>
            <ul>
                <Item team="palmeiras" titles={23} />
                <Item  team="atlético-mg" titles={10}/>
                <Item team="grêmio" titles={17}/>
                <Item />
            </ul>
        </>
    )
}

export default List