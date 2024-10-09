import { Link } from "raviger";

function Task({task, onDelete, onCheck }) {
    return (
    //         <li style={{color: tasks.completed ? 'green' : 'red'}} key={key}><input type='checkbox' id={tasks.id} onChange={(event) => {
    //             handleCompleted(event, tasks.id)
    //           }} value={tasks.id} checked={tasks.completed}></input> 
    //             <label htmlFor={tasks.id}>{tasks.name}</label>
    //             <button onClick={() => deleteTask(tasks.id)}>Delete</button>
    //         </li>

    <li style={{ listStyle: "none" }}>{task.title}
            <input 
                type="checkbox" 
                checked={task.completed} 
                onChange={(e) => onCheck(task.id, e.target.checked)} 
            />
<button
    onClick={() => onDelete(task.id)}>Delete</button>
    <Link href={`/${task.id}/edit`}>About</Link>
</li>
    )
}

export default Task