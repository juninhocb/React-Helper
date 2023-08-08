
import styles from './NewProject.module.css'
import ProjectForm from '../project/ProjectForm'

function NewProject(){

    

    function createPost(project){

        project.cost = 0; 
        project.services = []

        fetch("http://localhost:8080/projects", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then((response) => {
            response.json().then((data) => {
                console.log("Created!"); 
            })
        })
        .catch((error) => {console.log("Error: " + error)});

    }


    return (
        <div className={styles.newProjectContainer}>
            <h1>New Project</h1>
            <p>Create your project before adding services.</p>
            <ProjectForm handleSubmit={createPost} btnText="Create Project"/>
        </div>
    )
}

export default NewProject