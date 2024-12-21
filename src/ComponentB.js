import React from "react";
import ComponentC from "./ComponentC";

function ComponentB() {
    // const user= useContext(userContext);
    return (

        <> <div className="compB">
            <h1>  component B</h1>
            {/* <h2> {`hello again ${user}`}</h2> */}
            <ComponentC/>
        </div>
        </>
    )
}

export default ComponentB;