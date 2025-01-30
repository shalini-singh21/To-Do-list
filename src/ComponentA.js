import React, { createContext, useEffect } from "react";
import { useState } from "react";
import ComponentB from "./ComponentB";
import { use } from "react";

export const shaliniContext = createContext(); //shaliniContext ke naam ka context create kiya


function ComponentA() {
    const [user, setUser] = useState("shalu")
    const [data, setData] = useState(0);
    const [add, setAdd] = useState(0);

    const handleOnadd = () => {
        setAdd(add + 1);
    }
    const handleOnData = () => {
        setData(data + 5);
    }

    useEffect(() => {
        console.warn("useEffect work");
    },[data]);

    return (
        <>
            <div className="compA">
                <h1> ComponentA</h1>
                <h2> {`hello ${user}`}</h2>
                <shaliniContext.Provider value={user}>
                    <ComponentB />
                </shaliniContext.Provider>
                <h1>{data}</h1>
                <h1>{add}</h1>
                <button className="btn" onClick={handleOnadd}> add</button>
                <button className="btn" onClick={handleOnData}>data</button>

            </div>

        </>
    )
}
export default ComponentA;


