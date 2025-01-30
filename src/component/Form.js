import React, { useEffect, useState } from "react"
function Form() {
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [confirm, setConfirm] = useState();
    const [interest, setInterest] = useState();

    const handleOnSubmit = (event) => {
        console.warn("input values:", name, email, password, confirm, interest);
        event.preventDefault()
        if (name && email && password && confirm && interest) {


            if (password === confirm) {
                alert("successfully signup");
            } else {
                alert("password and confirm password must be same")
            }
        } else {
            alert("all feilds are mandatory");
        }
    }
useEffect(()=>{
console.warn("useeffect runs");
},[])
    


    return (
        <>
            <form onSubmit={handleOnSubmit} className="form">
                <h1>SignUp</h1>
                <hr></hr>
                <label htmlFor="name" className="label"> Name:  </label>
                <input className="inputform" type="text" placeholder="type your name"
                    onChange={(event) => setName(event.target.value)} />
                <p className={name ? " " : "nodata"}> {name ? " " : "name is required"}</p>


                <label htmlFor="email"  className="label"> Email: </label>
                <input className="inputform" type="email" placeholder="type your email" onChange={(event) => setEmail(event.target.value)} />
                <p className={email ? "" : "nodata"}>{email ? "" : "email is required"}</p>


                <label htmlFor="password"  className="label"> password:</label>
                <input className="inputform" type="password" placeholder="Retype your password" onChange={(event) => setPassword(event.target.value)} />
                <p className={password ? "" : "nodata"}>{password ? "" : "password is required"}</p>


                <label htmlFor="password"  className="label"> Confirm password: </label>
                <input className="inputform" type="password" placeholder="confirm-password" onChange={(event) => setConfirm(event.target.value)} />
                <p className={confirm ? "" : "nodata"} >{confirm ? "" : "confirm passwordis required"}</p>

                <select className="select" onChange={(e) => setInterest(e.target.value)}>
                    <option> select</option>
                    <option>male</option>
                    <option>female</option>
                </select>



                <button className="btn"> submit</button>

            </form>
        </>
    )

}

export default Form;