import styles from './Input.module.css'
function Input({name, label, type, placholder, handleOnChange, value}){
    return (
        <div className={styles.formControl}>
            <label htmlFor={name}> {label} </label>
            <input 
                type={type} 
                name={name} 
                id={name} 
                placeholder={placholder} 
                onChange={handleOnChange}
                value={value}
            />
        </div>
    )
}

export default Input