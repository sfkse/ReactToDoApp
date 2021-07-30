import React from 'react';
import { useState } from 'react'

const AddTask = ({ addTask }) => {
    const [text, setText] = useState("");
    const [day, setDay] = useState("");

    const onSubmit = (e) => {
        e.preventDefault()
        addTask({ text, day, "isDone": false })
        setText("")
        setDay("")
    }
    return (
        <form className="task-input-wrapper" onSubmit={onSubmit}>
            <div className="task-name">
                <label htmlFor="text-input">Text</label>
                <input
                    type="text"
                    id="text-input"
                    name="text"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder="Add Task" />
            </div>
            <div className="task-time">
                <label htmlFor="time-input" >Day & Time</label>
                <input
                    type="text"
                    id="time-input"
                    name="time"
                    value={day}
                    onChange={(e) => setDay(e.target.value)}
                    placeholder="Add Day & Time" />
            </div>
            <button type="submit" className="save-button" >Save Task</button>
        </form>
    )
}
export default AddTask