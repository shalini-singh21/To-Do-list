import React, { useEffect, useState } from "react";

// import tick from "../images/tick.png"
import todo from "../images/todo.png"

function Input() {
    const [tasks, setTasks] = useState([]); // that is an array that holds all task added the list
    const [input, setInput] = useState(''); //that holds the current input from the user
    const handleonchange = (event) => {
        console.log("changes in input feild");
        setInput(event.target.value)
    }
    const handleOnAdd = () => {

        if (input.trim()) {
            setTasks([...tasks, input]);
            setInput("");
        } else {
            alert('please add a task');
        }
    }
    const handleOnDel = (key) => {
        console.log("delete btn has been clicked")
        let newTasks = [...tasks];
        newTasks.splice(key, 1)
        setTasks([...newTasks])
    }


    useEffect(() => {
        const storedTasks = JSON.parse(localStorage.getItem('tasks'))
        if (storedTasks) {
            setTasks(storedTasks);
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
        console.warn("tasks added");
    }, [tasks]);
    return (
        <>
            <div className="App">
                <header className="header">   <img src={todo} className="todo-img" />
                
                </header>
               
                <h2 className="header1"> Get Your Things Done!!</h2>

                <div className="input-container">
                    <input className="input" type="text" value={input} onChange={handleonchange} placeholder="add item..." />
                    <button className="button btn-primary" onClick={handleOnAdd}>   Add + </button>

                    <hr></hr>

                    <ol>
                        {tasks.map((tasks, index) => (// index is the positions of the items 

                            <li key={index} className="list-bar">
                                {tasks}
                                <i onClick={handleOnDel} className="fa fa-trash-can"></i>
                            </li>
                        ))}
                    </ol>
                </div>
            </div>
        </>
    )
}

export default Input;