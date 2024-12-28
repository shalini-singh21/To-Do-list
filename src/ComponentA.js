import React, { createContext } from "react";
import {  useState } from "react";
import ComponentB from "./ComponentB";

export const shaliniContext=createContext(); //shaliniContext ke naam ka context create kiya


function ComponentA() {
    const [user, setUser] = useState("shalu")
    return (
        <>
            <div className="compA">
                <h1> ComponentA</h1>
                <h2> {`hello ${user}`}</h2>
           <shaliniContext.Provider value={user}>
            <ComponentB/>
           </shaliniContext.Provider>
               
            </div>
           
        </>
    )
}
export default ComponentA;


