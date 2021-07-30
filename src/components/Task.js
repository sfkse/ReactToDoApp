import React from 'react'

const Task = ({ task, deleteTask, toggleTask }) => {

    return (


        <div className={`task-wrapper ${task.isDone ? "done" : ""}`} onDoubleClick={() => toggleTask(task?.id)}>
            <div className="task-desc">
                <h3>{task?.text}</h3>
                <p>{task?.day}</p>
            </div>
            <div className="close" onClick={() => deleteTask(task?.id)}>
                X
            </div>
        </div>

    )
}
export default Task;