import { Link } from 'react-router-dom';
import styles from './NavBar.module.css';
function NavBar(){
    return (
        <>
            <ul className={styles.list}>
                <li className={styles.item}><Link to="/" >Home</Link></li>
                <li className={styles.item}><Link to="/enterprise" >Enterprise</Link></li>
                <li className={styles.item}><Link to="/contact" >Contact</Link></li>
            </ul>
        </>    
    )
}

export default NavBar