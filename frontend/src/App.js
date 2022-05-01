// Import Style and visual assets
import './App.css';
import logo from './assets/bp-logo-white.png'

// Import functions
import { useState } from 'react';

// Import components
import Tasks from "./components/Tasks"

// HomePage
const Home = () => (
  <header className="App-header">
    <h1>TickTask</h1>
  </header>
)


function App() {
  // Handle Initial data load and display all tasks
  const [data, setData] = useState([]);

  const loadAllTasks = () => {
    console.log("One call")
    fetch('http://localhost:3010/tasks')
      .then(response => response.json())
      .then(result => {
        setData(result)
      })
      .catch(error => {
        console.log(error)
      })
  }

  // Potentially an issue with the below that is causing an infinite loop?
  // loadAllTasks()

  // Handle new task submission
  const input = document.getElementById("#new-task-input")
  const [title, setTitle] = useState('');

  const addNewTask = () => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        title: title,
      })
    };
    fetch('http://localhost:3010/tasks', requestOptions)
      .then(response => response.json())
      .catch(error => console.log(error))

    loadAllTasks()
    input.value = ''
  }

  return (
    <div className="App">
      <Home />
      <div>
        <input id='new-task-input' placeholder='To do...' onChange={e => setTitle(e.target.value)}></input>
        <button onClick={addNewTask}>Add</button>
      </div>
      <Tasks data={data} />
      <footer>
        <img src={logo} alt='BP logo' />
      </footer>
    </div>
  );
}

export default App;
