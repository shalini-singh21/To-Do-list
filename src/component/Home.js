import React from "react";

function Home() {
    return (
        <>
            <h1> home component</h1>
            <div className="cart">

                <div className="image">

                </div>
                <div className="text-wrapper">
                    <span> iphone</span>
                    <span> price 3535</span>

                </div>

                <div >
                    <button className="btn btn-primary"> Add to cart</button>
                </div>

            </div>
        </>

    )
}

export default Home;