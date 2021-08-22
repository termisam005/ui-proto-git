import React, { Component } from "react";
//import { Link } from "react-router-dom";

class Grmessage extends Component {

    render() {
        return (
            <div className="message_wrap">
                <article className="message_top">
                    <div className="mess_top_line">
                        <h1 className="top_title">Message</h1>
                        <p className="pen">
                            <img src="../resources/images/sv_note_pen.svg" alt="pen" />
                        </p>
                    </div>
                </article>
                <p className="line2"></p>
                <article className="message_body">
                    <div className="message_cont">
                        <h3>Friend request</h3>
                        <div className="message_box">
                            <dl className="message_dl">
                                <dt>
                                    <span className="coming"></span>
                                    <p className="prof_c40">
                                        <img src="../resources/images/prof_none.png" alt="none photo" />
                                    </p>
                                </dt>
                                <dd>
                                    <div className="mess_who">
                                        <span className="who">Christoph Willbaldard</span>
                                        <span className="time">05:20</span>
                                    </div>
                                    <div className="mess_tip">
                                        <span className="word">requested a friend.</span>
                                        <span className="bagde">1</span>
                                    </div>
                                </dd>
                            </dl>
                        </div>
                    </div>
                    <div className="message_cont">
                        <h3>Message</h3>
                        <div className="message_box">
                            <dl className="message_dl">
                                <dt>
                                    <p className="prof_c40">
                                        <img src="../resources/images/prof_ex1.png" alt="profile photo" />
                                    </p>
                                </dt>
                                <dd>
                                    <div className="mess_who">
                                        <span className="who">Issac Alberiz</span>
                                        <span className="time">Now</span>
                                    </div>
                                    <div className="mess_tip">
                                        <span className="word">Even where the road to artist</span>
                                        <span className="bagde">1</span>
                                    </div>
                                </dd>
                            </dl>
                        </div>
                    </div>
                    <div className="message_cont">
                        <h3>recommended friend</h3>
                        <div className="message_box">
                            <dl className="message_dl">
                                <dt>
                                    <p className="prof_c40">
                                        <img src="../resources/images/prof_ex2.png" alt="profile photo" />
                                    </p>
                                </dt>
                                <dd>
                                    <div className="mess_who">
                                        <span className="who">Jay.Park</span>
                                        <span className="time">Now</span>
                                    </div>
                                    <div className="mess_tip bord">
                                        <span className="bord_tip">Producer</span>
                                        <span className="bord_tip">Top liner</span>
                                    </div>
                                </dd>
                            </dl>
                        </div>
                    </div>
                </article>
            </div>
        );
    }
}

export default Grmessage;