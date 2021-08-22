import React from "react";
import { useState } from "react";
import Header from "../components/header/Header";

export default function Foryou() {
    const [showPopup, setShowPopup] = useState(false);

    const togglePopup = (event) => {
        setShowPopup(event.target.value)
    };

    return (
        <div className="wrap">
            <Header />
            <div className="container">
                <div className="contents">
                    <h1>Foryou</h1>

                    <button type="button" onClick={togglePopup} value='false'>팝업오픈</button>

                    {showPopup ? (
                        <section className={"pop_contents"}>
                            <div onClick={togglePopup} className={"pop_bg"}></div>
                            <div className={"pop_body"}>
                                <button onClick={togglePopup} className={"close_pop"} type="button">Close</button>
                            </div>
                        </section>
                    ) : null}
                </div>
            </div>
        </div>
    )
}

