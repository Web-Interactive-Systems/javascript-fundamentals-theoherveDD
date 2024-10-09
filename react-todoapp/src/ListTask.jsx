{/* <ListTask tasks={tasks} handleCompleted={handleCompleted} deleteTask={deleteTask}/> */}


import Task from './Task.jsx'

function ListTask({tasks, onDelete, onCheck}) {
    return (
        <ul>
        { tasks.map((task) => {
            const key = task.id;
            // return <li key={key}>{e.name}</li>
            return <Task key={key} task={task} onDelete={onDelete} onCheck={onCheck}/>
          })
        }
      </ul>
    )
}

export default ListTask