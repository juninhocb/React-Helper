import styles from './Phrase.module.css'

function Phrase(){

    return (
        <div className={styles.phraseContainer}>
            <p className={styles.phraseContent}> This component will return a Phrase. </p>
        </div>
    )
}


export default Phrase