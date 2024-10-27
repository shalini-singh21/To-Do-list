import React, { useState } from "react";
// import TOdoheros from "./Todoheros";
// import './App.css';
function List() {
    const [tasks, setTasks] = useState([]); // that is an array that holds all task added the list

    const [input, setInput] = useState(''); //that holds the current input from the user

    const handleonchange = (event) => {
        console.log("changes in input feild");
        setInput(event.target.value)
    }


    const handleOnAdd = () => {
        if (input.trim()) { //trim function is used to remove the extra space at the end and start of the strings
            setTasks([...tasks, input]);
            setInput(""); //clear the input after adding the task 
        } else {
            alert('please add a task'); //if input feild is empty it will show this alert message to user
        }

    }
    return (
        <>
            <div className="App">

                <header className="header"> <h1> TO-DO-LIST</h1></header>
                <div className="input-container">
                    <input className="input" type="text" value={input} onChange={handleonchange} placeholder="add item..." />
                    <br></br>
                    <button className="button btn-primary" onClick={handleOnAdd}> Add + </button>

                    <ul>

                        {tasks.map((index) => { // index is the positions of the items 
                         <li key={index}>{tasks}</li> 
                         
                          {/* // it identify which task is added  changed and removed   //to rendering the task  */}
                         })} 

                        {/* <li key={index}>{tasks}</li> */}
                    </ul>

                </div>
            </div>

        </>
    )
}

export default List;