import React, { useState } from "react"
function Comment() {
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [confirm, setConfirm] = useState();

    const handleOnSubmit = (event) => {
        event.preventDefault()
        if (name && email && password && confirm) {


            if (password === confirm) {
                alert("successfully signup");
            } else {
                alert("password and conform password must be same")
            }
        } else {
            alert("all feilds are mandatory");
        }
    }



    return (
        <>
            <form onSubmit={handleOnSubmit}>
                <h1>SignUp</h1>
                <label htmlFor="name"> Name:  </label>
                <input className="inputform" type="text" placeholder="type your name" onChange={(event) => setName(event.target.value)} />
                <p className={name ? "data" : "nodata"}> {name ? "" : "name is required"}</p>


                <label htmlFor="email"> Email: </label>
                <input className="inputform" type="email" placeholder="type your email" onChange={(event) => setEmail(event.target.value)} />
                <p className={email ? "data" : "nodata"}>{email ? "" : "email is required"}</p>


                <label htmlFor="password"> password:</label>
                <input className="inputform" type="password" placeholder="type your passqord" onChange={(event) => setPassword(event.target.value)} />
                <p className={password ? "data" : "nodata"}>{password ? "" : "password is required"}</p>


                <label htmlFor="password"> Confirm password: </label>
                <input className="inputform" type="password" placeholder="confirm-password" onChange={(event) => setConfirm(event.target.value)} />
                <p className={confirm ? "data" : "nodata"} >{confirm ? "" : "confirm passwordis required"}</p>


                <button> signup</button>
            </form>
        </>
    )

}

export default Comment;