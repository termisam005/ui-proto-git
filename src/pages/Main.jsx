import React from "react";
import "../App.scss";
import Header from "../components/header/Header";
import Blueline from "../components/Blueline";
import Aside from "../components/Aside";
import Feed from "../components/Feed";
import Project from "../components/Project";
import Task from "../components/Task";
import ButtonComponent from "../components/ButtonComponent";

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


