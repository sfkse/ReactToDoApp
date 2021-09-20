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

  useEffect(() => {
    fetch(baseUrl)
      .then(response => response.json())
      .then(data => setTask(data))
  }, [])

  const handleVisible = () => {

    setVisible(!visible)
  }


  //Delete Task
  const deleteTask = (id) => {
    setTask(tasks?.filter(task => task.id !== id))
  }

  //Add Task
  const addTask = (task) => {
    const newTaskID = Math.floor(Math.random() * 100);
    const newTask = { ...task, "id": newTaskID };
    setTask([...tasks, newTask])

  }

  //Toggle task
  const handleToggle = (taskID) => {

    setTask(
      tasks?.map(task => task.id === taskID ? { ...task, "isDone": !task.isDone } : task)
    )

  }
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
