import React from "react";
import { createContext, useState } from "react";
import ComponentB from './ComponentB';
export const userContext = createContext();//user context naam ka context bnaya h by using create context

function ComponentA() {
    const [user, setUser] = useState("shalu")
    return (
        <>
            <div className="compA">
                <h1> ComponentA</h1>
                <h2> {`hello ${user}`}</h2>
           
                <userContext.Provider value={user}>
                    <ComponentB />
                </userContext.Provider>
            </div>
        </>
    )
}
export default ComponentA;


