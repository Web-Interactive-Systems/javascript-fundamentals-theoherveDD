import { useEffect, useState } from 'react';
import './App.css';
import ListTask from './ListTask';
import AddTask from './AddTask';



function App() {


  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then ((data) => data.json())
    .then ((data) => {
      console.log(data);
      setTasks(data);
    });

  } , []);

  const [tasks, setTasks] = useState([{name: "task1", completed: true, id: `${Math.random()}`}]);


  useEffect(() => {
    console.log("render use effect");
  }
  , []);

  const addTask = (task) => {
    setTasks((tasks) => [tasks, ...tasks]);
  }

  const deleteTask = (taskId) => {
    const newTasks = tasks.filter((t) => t.id !== taskId);
    setTasks(newTasks);
  };

  const checktask = (taskId, value) => {
    const index = tasks.findIndex((t) => t.id === taskId);
    const task = tasks[index];

    // update the task
    task.completed = value;
    const newTasks = [...tasks];
    newTasks[index] = task; 
    setTasks(newTasks);
  };


  return ( 
    <div className="App">
      <h1>Todo App</h1>
      <AddTask addTask={addTask} />
      <ListTask tasks={tasks} deleteTask={deleteTask} checktask={checktask} />
    </div>
  );
}



export default App;