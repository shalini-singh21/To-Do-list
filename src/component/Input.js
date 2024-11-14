import React, { useEffect, useState } from "react";

import tick from "../images/tick.png"

function Input() {
    const [tasks, setTasks] = useState([]); // that is an array that holds all task added the list
    const [input, setInput] = useState(''); //that holds the current input from the user

    const handleonchange = (event) => {
        console.log("changes in input feild");
        setInput(event.target.value)
    }


    const handleOnAdd = () => {

        if (input.trim()) { //trim function is used to remove the extra space at the end and start of the strings
            setTasks([...tasks, input ]);
            setInput(""); //clear the input after adding the task 
        } else {
            alert('please add a task'); //if input feild is empty it will show this alert message to user
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
        //local storage only support to string the strings as keys and value therefore we cannot strore the arrays and
        //  objects  without converting the arrays and objects into strings first,  so  here json.stringify is use to 
        // convert the objects int0 a json string .
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);



   

    return (
        <>
            <div className="App">

                <header className="header"> <h1> TO-DO-LIST  <img src={tick} className="tickImg" /></h1></header>
                <hr></hr>
                <div className="input-container">
                    <input className="input" type="text" value={input} onChange={handleonchange} placeholder="add item..." />
                    <br></br>
                    <button className="button btn-primary" onClick={handleOnAdd}>   Add + </button>
                    <hr></hr>
                    <ol>

                        {tasks.map((tasks, index) => (// index is the positions of the items 
                            <li key={index} className="list-bar">
                                 
                                

                                {tasks}
                                <button className="del-btn" onClick={handleOnDel}>
                                    <i className="fa-solid fa-trash-can"></i>
                                </button>

                            </li>


                        ))}


                    </ol>
                </div>

            </div>
        </>
    )
}

export default Input;