import React from "react";
import ComponentD from "./ComponentD";

function ComponentC() {
    // const user= useContext(userContext);
    return (
        <> <div className="compC">
            <h1> component C</h1>
            {/* <h2> {`hello again ${user}`}</h2>  */}
          
            <ComponentD />
           
           
            
        </div>
        </>
    )
}

export default ComponentC;