import React from "react";
//import "../App.scss";
import Header from "../components/header/Header";
import Blueline from "../components/layout/Blueline";
import Aside from "../components/layout/Aside";
import Feed from "../components/layout/Feed";
import Project from "../components/layout/Project";
import Task from "../components/layout/Task";
import ButtonComponent from "../components/common/ButtonComponent";

export default function Main() {
    return (
        <div className="wrap">
            <Header />
            <div className="container">
                <Blueline />
                <div className="contents">
                    <Aside />
                    <main className="the_main">
                        <Task />
                        <Project />
                        <Feed />
                        <div className="cont50">
                            <ButtonComponent>Cancel</ButtonComponent>
                            <ButtonComponent>Confirm</ButtonComponent>
                        </div>
                    </main>
                </div>
            </div>
        </div>
    );
}


