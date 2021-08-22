import React, { Component } from "react";
import { Link } from "react-router-dom";
import Fixmenu from "./Fixmenu";
import Grmessage from "./Grmessage";
import $ from "jquery";

class Header extends Component {

    state = {
        isToggleOn: false,
    }

    componentDidMount() {
        $(function () {
            $(".circle_p").click(function () {
                $(this).parents(".hcircle").toggleClass("on");
            });
            $(".hidd_dark").click(function () {
                $(this).parents(".hcircle").removeClass("on");
            });
            $(".flags").click(function () {
                $(this).parents(".hcircle").removeClass("on");
            });
        });
    }

    render() {
        const isOn = this.state.isToggleOn;

        return (
            <header>
                <div className="header_line">
                    <section className="header_left">
                        <h1 className="hd_logo">
                            <Link to="/main" title="Sparwk">
                                <img src="../resources/images/logo.png" alt="Sparwk" />
                            </Link>
                        </h1>
                        <nav className="nav">
                            <p className="nav_menu">
                                <Link to="/foryou">For you</Link>
                            </p>
                            <p className="nav_menu">
                                <Link to="/collabo">Collabo</Link>
                            </p>
                            <p className="nav_menu">
                                <Link to="/pitching">Pitching</Link>
                            </p>
                        </nav>
                    </section>
                    <section className="header_center">
                        <article className="hd_search">
                            <button type="button" className="btn_srch"></button>
                            <input type="text" className="hd_input" placeholder="Search" />
                        </article>
                    </section>

                    <section className="header_right">
                        <article className="hd_icline">
                            <div className="hcircle">
                                <p className="circle_p">
                                    <img src="../resources/images/clock.png" alt="time" />
                                </p>
                            </div>
                            <div className="hcircle">
                                <p className="circle_p">
                                    <img src="../resources/images/nation_usa.png" alt="usa" />
                                </p>
                                <section className="hidd_zone">
                                    <div className="hidd_dark"></div>
                                    <article className="hidd_box">
                                        <div className="flag_top">
                                            <p className="flags">
                                                <img src="../resources/images/flag_eng.png" alt="English" />
                                                <span className="flag_word">English</span>
                                            </p>
                                        </div>
                                        <p className="line1"></p>
                                        <div className="flag_body">
                                            <p className="flags">
                                                <img src="../resources/images/flag_usa.png" alt="usa" />
                                                <span className="flag_word">English</span>
                                            </p>
                                            <p className="flags">
                                                <img src="../resources/images/flag_nor.png" alt="norsk" />
                                                <span className="flag_word">Norsk (nynorsk)</span>
                                            </p>
                                            <p className="flags">
                                                <img src="../resources/images/flag_nor.png" alt="norsk" />
                                                <span className="flag_word">Norsk (Bokmål)</span>
                                            </p>
                                            <p className="flags">
                                                <img src="../resources/images/flag_kor.png" alt="korea" />
                                                <span className="flag_word">한국어</span>
                                            </p>
                                            <p className="flags">
                                                <img src="../resources/images/flag_chn.png" alt="china" />
                                                <span className="flag_word">중국어(간체)</span>
                                            </p>
                                            <p className="flags">
                                                <img src="../resources/images/flag_chn.png" alt="china" />
                                                <span className="flag_word">중국어(번체)</span>
                                            </p>
                                            <p className="flags">
                                                <img src="../resources/images/flag_jpn.png" alt="jpn" />
                                                <span className="flag_word">日本語</span>
                                            </p>
                                        </div>
                                    </article>
                                </section>
                            </div>
                            <div className="hroom">
                                <p className="circle_p btn_message" onClick={() => this.setState({ isToggleOn: !isOn })}>
                                    <span className="hc_cout">2</span>
                                    <img src="../resources/images/talk.png" alt="message" />
                                </p>
                            </div>
                            <div className="hcircle">
                                <p className="circle_p">
                                    <img src="../resources/images/bell.png" alt="alarm" />
                                </p>
                            </div>
                            <div className="hcircle">
                                <p className="circle_p prof_c32">
                                    <span className="line_over"></span>
                                    <img src="../resources/images/thumb_ex1.jpg" alt="profile photo" />
                                </p>
                                <section className="hidd_zone">
                                    <div className="hidd_dark"></div>
                                    <article className="hidd_box">
                                        <section className="prof_wrap">
                                            <div className="prof_top">
                                                <div className="view">
                                                    View Profile
                                                </div>
                                                <p className="account">
                                                    <span className="word">
                                                        Account conversion
                                                    </span>
                                                    <img src="../resources/images/sv_reload_vio.svg" alt="reload" />
                                                </p>
                                                <p className="set">Set</p>
                                            </div>
                                            <p className="line1"></p>
                                            <div className="prof_end">
                                                <span className="delete">Delete</span>
                                            </div>
                                        </section>
                                    </article>
                                </section>
                            </div>
                            <div className="hroom">
                                <p className="circle_light">
                                    <img src="../resources/images/img_btn_dark.png" alt="light button" />
                                </p>
                            </div>
                        </article>
                    </section>
                </div>

                <Fixmenu />

                <section className={isOn ? "gr_message see" : "gr_message"}>
                    <Grmessage />
                </section>
            </header>
        );
    }
}

export default Header;
