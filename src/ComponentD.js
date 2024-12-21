 import  React ,{ useContext } from "react"; //jo constext comp  me bnaya tha 
import { userContext } from "./ComponentA";

function ComponentD() {
   
    const user= userContext(useContext);
    return (
        <> <div className="compD">
            <h1> component D</h1>
            <h2>{`bye ${user}`}</h2>
        </div>

        </>
    )
}

export default ComponentD;