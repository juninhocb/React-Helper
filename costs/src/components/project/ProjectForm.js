import styles from './ProjectForm.module.css'
function ProjectForm(){
    return (
        <form>
            <div>
                <input type="text" placeholder="Place the name of project"/>
            </div>
            <div>
                <input type="email" placeholder="Place the total amount will be spent in project"/>
            </div>
            <div>
                <select mame="category_id">
                    <option disabled> Select category</option>
                    <option > Select category</option>
                    <option > Select category</option>
                    <option > Select category</option>
                </select>
            </div>
            <div>
                <input type="submit" value="Create Project" />
            </div>
        </form>
    )
}

export default ProjectForm

