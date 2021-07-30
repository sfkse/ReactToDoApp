import './App.css';
import { useState } from 'react'
import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';

function App() {
  const [tasks, setTask] = useState([

    {
      "id": 1,
      "text": "Study React Pre-Class Notes",
      "day": "Feb 5th at 2:30pm",
      "isDone": false
    },
    {
      "id": 2,
      "text": "Feed the Dog",
      "day": "Feb 6th at 1:30pm",
      "isDone": false
    },
    {
      "text": "Wash car",
      "day": "Feb 10th at 3:00pm",
      "isDone": false,
      "id": 3
    }

  ]);
  const [visible, setVisible] = useState(false);
  // console.log(tasks)

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
