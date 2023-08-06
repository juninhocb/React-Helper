import PropTypes from 'prop-types'

function Item ({team, titles}){
    return (
        <>
            <li>{team} - {titles}</li>
        </>
    )
}

//required does not make sense with default props
Item.propTypes = {
    team: PropTypes.string.isRequired, 
    titles: PropTypes.number.isRequired
}

Item.defaultProps = {
    marca: 'Title need to be set',
    titles: 0
}

export default Item