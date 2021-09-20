import './App.css';
import { useState, useEffect } from 'react'
import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';

function App() {
  const [tasks, setTask] = useState([]);
  const [visible, setVisible] = useState(false);
  // console.log(tasks)
  const baseUrl = " http://localhost:3001/tasks";

  const fetchTasks = () => {
    fetch(baseUrl)
      .then(response => response.json())
      .then(data => setTask(data))
  }
  useEffect(() => {
    fetchTasks()
  }, [])

  const handleVisible = () => {

    setVisible(!visible)
  }


  //Delete Task
  const deleteTask = async (id) => {
    await fetch(`${baseUrl}/${id}`, {
      method: 'DELETE',
    })
    // .then(() => fetchTasks())
    fetchTasks()
  }

  //Add Task
  const addTask = async (task) => {

    const res = await fetch(baseUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(task)
    });
    await res.json();
    fetchTasks()
  }

  //Toggle task
  const handleToggle = async (toggleDoneID) => {
    const res = await fetch(`${baseUrl}/${toggleDoneID}`);
    const data = await res.json();
    const updatedTask = { ...data, isDone: !data.isDone };

    await fetch(`${baseUrl}/${toggleDoneID}`, {
      method: 'PUT',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(updatedTask)
    });
    fetchTasks()
  }
  // const handleToggle = (taskID) => {

  //   setTask(
  //     tasks?.map(task => task.id === taskID ? { ...task, "isDone": !task.isDone } : task)
  //   )

  // }
  return (
    <div className="App">
      <Header title="Task Tracker" visible={visible} handleVisible={handleVisible} />
      {visible && <AddTask addTask={addTask} />}
      {
        tasks.length !== 0 ? <Tasks tasks={tasks} deleteTask={deleteTask} toggleTask={handleToggle} /> : <div className="no-task">No Tasks To Show</div>
      }


    </div>
  );
}

export default App;
