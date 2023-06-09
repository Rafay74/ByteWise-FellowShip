import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Tasks from './components/Tasks';
import { useState } from 'react';

function App() {

  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Docters Appointment",
      day: "Feb 5th at 2:30pm",
      remainder: true,
    },
    {
      id: 2,
      text: "Meeting at School",
      day: 'Feb 6th at 1:30 pm',
      remainder: true,
    },

    {
      id: 3,
      text: "Food Shopping",
      day: "Feb 5th at 2:30pm",
      remainder: false,
    },
  ])


  //Delete Task
  const deleteTask = (id) => {
    console.log('delete', id)
  }

  return (
    <div className="App">
      <Header />
      <Tasks tasks={tasks} onDelete={deleteTask} />
    </div>
  );
}

export default App;
