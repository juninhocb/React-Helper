import { useEffect, useState } from 'react'; 
import styles from './ProjectForm.module.css'
import Input from '../form/Input'
import Select from '../form/Select'
import SubmitButton from '../form/SubmitButton'
function ProjectForm({btnText, handleSubmit, projectData}){

    const [categories, setCategories] = useState([]); 
    const [project, setProject] = useState(projectData || {})
    
    useEffect(() => {
        fetch('http://localhost:8080/api/v1/categories', {
            method: 'GET', 
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then((response) => {
            response.json()
                .then((data) => {
                    setCategories(data);
                })
        })
        .catch((err) => console.log(err))
    }, []);

    const submit = (e) => {
        e.preventDefault()
        console.log(project)
        handleSubmit(project);
    }

    function handleChange(e) {
        setProject({ ...project, [e.target.name]: e.target.value });
    }

    function handleCategory(e) {
        setProject({ ...project, 
            category: {
                id: e.target.value, 
                name: e.target[e.target.selectedIndex].text}, });
    }

    return (
        <form className={styles.form} onSubmit={submit} >
            <div>
                <Input name="nameProject"
                       label="Name project" 
                       type="text"
                       placholder="place the name of project"
                       handleOnChange={handleChange} 
                       //value={project.name ? project.name : ''}
                />
            </div>
            <div>
                <Input name="budget"
                       label="Avaiable budget" 
                       type="number"
                       placholder="place the total amount to spent with this project"
                       handleOnChange={handleChange} 
                       //value={project.budget ? project.budget : ''}

                />
            </div>
            <div>
                <Select 
                    name="categoryId"
                    label="Category"
                    options={categories}
                    //value = {project.category ? project.category : ''}
                    handleOnChange={handleCategory}
                />
            </div>
            <div>
                <SubmitButton text={btnText} type="submit" />
            </div>
        </form>
    )
}

export default ProjectForm

