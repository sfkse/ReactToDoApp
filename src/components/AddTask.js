import React from 'react';
import { useState, useRef } from 'react'

const AddTask = ({ addTask }) => {
    // const [text, setText] = useState("");
    // const [day, setDay] = useState("");

    // const handleTextChange = (e) => { setText(e.target.value) }
    // const handleDayChange = (e) => { setDay(e.target.value) }
    const text = useRef();
    const day = useRef();


    const onSubmit = (e) => {
        e.preventDefault()
        !text ? alert('Please add a task') :
            addTask({ "text": text.current.value, "day": day.current.value, "isDone": false })

        text.current.value = "";
        day.current.value = "";

        // setText("")
        // setDay("")
    }
    return (
        <form className="task-input-wrapper" onSubmit={onSubmit}>
            <div className="task-name">
                <label htmlFor="text-input">Text</label>
                <input
                    type="text"
                    id="text-input"
                    name="text"
                    ref={text}
                    // value={text}                    
                    // onChange={handleTextChange}
                    placeholder="Add Task"
                />
            </div>
            <div className="task-time">
                <label htmlFor="time-input" >Day & Time</label>
                <input
                    type="text"
                    id="time-input"
                    name="time"
                    ref={day}
                    // value={day}
                    // onChange={handleDayChange}
                    placeholder="Add Day & Time" />
            </div>
            <button type="submit" className="save-button" >Save Task</button>
        </form>
    )
}
export default AddTask