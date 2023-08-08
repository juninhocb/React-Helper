import styles from './Select.module.css'


function Select({options, name, label, handleOnChange, value}){
    return (
        
        <div className={styles.formControl}>
            <label htmlFor={name}> {label} </label>
            <select mame={name} id={name} onChange={handleOnChange} value={value}>
                    <option disabled> Select one option</option>
                    {options.map((option) => (
                        <option value={option.id} key={option.id}> {option.name}</option>
                    ))}
                </select>
        </div>
    )
}

export default Select