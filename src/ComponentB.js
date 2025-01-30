import React from "react";
import ComponentC from "./ComponentC";

function ComponentB() {
    return (
        <> <div className="compB">
            <h1>  component B</h1>
           
            <ComponentC/>

            
        </div>
        </>
    )
}

export default ComponentB;