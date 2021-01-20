// import '../App.css'; 
import DeleteButton from '../icons/delete.svg'
import UpdateButton from '../icons/update.svg'

const TaskList = ({task, done, key, color, onDelete, onUpdate}) => {
    
    return(
        <div key={key}>
            <button className="Button" style={{backgroundColor:color}} >
                
                <span className="Body-span" >{task}</span>
                <input type="image" alt="delete" src={DeleteButton} className="Image" />
                <input type="image" alt="update" src={UpdateButton} className="Image" />

            </button>
        </div>
    )
}
   
export default TaskList;