import styles from './NavBar.module.css'
import {Link} from 'react-router-dom'
import logo from '../../img/costs_logo.png'
import Container from './Contianer'

function NavBar(){
    return (
        <nav className={styles.navbar}>
            <Container>
                
            <Link to="/"> <img src={logo} alt="Costs" /> </Link>
                <ul className={styles.list} >
                    <li className={styles.itemList}><Link to ="/"> Home </Link></li>                   
                    <li className={styles.itemList}><Link to ="/company" >Company</Link></li>
                    <li className={styles.itemList}><Link to ="/projects" >Projects</Link></li>
                    <li className={styles.itemList}><Link to ="/contact" >Contact</Link></li>
                </ul>
            </Container>    
      </nav>
    )
}

export default NavBar