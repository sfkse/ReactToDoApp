import React from 'react';
import Task from './Task';

const Tasks = ({ tasks, deleteTask, toggleTask }) => {
    return (
        <>
            {tasks?.map(task => (
                <Task key={task.id} task={task} deleteTask={deleteTask} toggleTask={toggleTask} />

            ))}

        </>
    )
}
export default Tasks;