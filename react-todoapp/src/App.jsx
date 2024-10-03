import { useState } from 'react';
import './App.css';

function App() {
  // Initialisation de `tasks` comme un tableau vide au lieu de 0
  const [tasks, setTasks] = useState(["task1", "task2", "task3"]);

  return (
    <>
    {/* ajout d'un bouton qui va ajouter une tache avec la structure "task[numero de tache]" */}
      <button onClick={() => setTasks(tasks.push("task"))}>Add task</button>

      <ul>

        { tasks.map((e) => {
            return <li>{e}</li>;
          })
        };
      </ul>
    </>
  );
}

export default App;