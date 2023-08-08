import styles from './NewProject.module.css'
import ProjectForm from '../project/ProjectForm'

function NewProject(){
    return (
        <div className={styles.newProjectContainer}>
            <h1>New Project</h1>
            <p>Create your project before adding services.</p>
            <ProjectForm/>
        </div>
    )
}

export default NewProject