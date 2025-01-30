import React, { useState } from "react";
// import { use } from "react";

function Login() {
    // const [name, setName] = useState();
    // const [password, setPassword] = useState();
    const[login,setLogin]=useState(true);


  


    if(login){
        return<h1> welcome shalu</h1>
    } else {
        return <button onClick={() => setLogin(true)}>  login</button>;
    }
} 
//     return (
//         <>
//             <form onSubmit={submit}>
//                 <h1> Login</h1>

//                 {/* {login==1 ? <h1>welcome shalu</h1> :  login==2?<h1>welcome guest</h1> : <h1>welcome user</h1>} */}




//                 <input type="text" className="inputform" placeholder="user"
//                     onChange={namehandler} /> 
//                 <br></br> 
//                 <input type="password" placeholder="password" onChange={passwordhandler} />
//                 <br></br>  
            
//                 <button className="button" type="submit" > Login</button>
//             </form>
//         </>
//     )
// }
export default Login ;