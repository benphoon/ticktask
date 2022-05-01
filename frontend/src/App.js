// Import Style and visual assets
import './App.css';
import logo from './assets/bp-logo-white.png'

// Import functions
import { useState, useEffect } from 'react';

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

  useEffect(() => {
    fetch('http://localhost:3010/tasks')
      .then(response => response.json())
      .then(result => {
        setData(result)
      })
      .catch(error => {
        console.log(error)
      })
  })


  // Handle new task submission
  const [title, setTitle] = useState('');

  // Handler for new task submission via Button
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
  }

  // Handler for new task submission via Enter key
  const onKeyPress = e => {
    if (e.key === 'Enter') {
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
    }
  }

  // Handler for Task Deletion
  // const deleteTask = () => {
  //   const requestOptions = {
  //     method: 'DELETE',
  //     headers: { 'Content-Type': 'application/json' },
  //     body: JSON.stringify({
  //       title: title,
  //     })
  //   };
  //   fetch('http://localhost:3010/tasks', requestOptions)
  //     .then(response => response.json())
  //     .catch(error => console.log(error))
  // }

  return (
    <div className="App">
      <Home />
      <div className='new-task'>
        <input id='new-task-input' placeholder='To do...' onChange={e => setTitle(e.target.value)} onKeyDown={e => onKeyPress(e)}></input>
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
