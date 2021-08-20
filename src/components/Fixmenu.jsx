import React, { Component } from "react";
import { Link } from "react-router-dom";
import $ from "jquery";

class Fixmenu extends Component {

    // constructor(props) {
    //     super(props)
    //     this._toggleDiv = this._toggleDiv.bind(this)
    // }
    // _toggleDiv() {
    //     $(this.refs['toggle-div']).slideToggle(250)
    // }

    componentDidMount() {
        $(function () {
            $(".fixmenu").hover(
                function () {
                    $(this).children(".hidden_menu").stop().animate({
                        width: "toggle"
                    }, 200);
                }
            );
        });
        $(function () {
            $(".btn_menu").click(function () {
                $(".fixmenu_bar").slideToggle(200);
            });
        });
    }

    render() {

        return (
            <section className="gr_fixmenu">
                <p className="btn_menu"></p>
                <article className="fixmenu_bar">
                    {/* 페이지이동 */}
                    <div className="fixmenu">
                        <img className="icon_fix" src="../resources/images/sv_fix_note.svg" alt="icon note" />
                        <img className="icon_fix_on" src="../resources/images/sv_fix_note_on.svg" alt="icon note" />
                        <section className="hidden_menu">
                            <div className="top">
                                <h1>Pages</h1>
                            </div>
                            <p className="line1"></p>
                            <div className="menus">
                                <Link to="/login">Login</Link>
                            </div>
                            <p className="line1"></p>
                            <div className="menus">
                                <Link to="/signin">Signin</Link>
                            </div>
                            <p className="line1"></p>
                            <div className="menus">
                                <Link to="/find_id">FindId</Link>
                            </div>
                            <p className="line1"></p>
                            <div className="menus">
                                <Link to="/find_pw">FindPw</Link>
                            </div>
                        </section>
                    </div>
                    {/* 페이지이동 End */}
                    <div className="fixmenu">
                        <img className="icon_fix" src="../resources/images/sv_fix_note.svg" alt="icon note" />
                        <img className="icon_fix_on" src="../resources/images/sv_fix_note_on.svg" alt="icon note" />
                        <section className="hidden_menu">
                            <div className="top">
                                <h1>Project</h1>
                            </div>
                            <p className="line1"></p>
                            <div className="menus">
                                <a>Create Project</a>
                            </div>
                            <p className="line1"></p>
                            <div className="menus">
                                <a>Project List</a>
                            </div>
                            <p className="line1"></p>
                            <div className="menus">
                                <a>Timeline View</a>
                            </div>
                            <p className="line1"></p>
                            <div className="menus">
                                <a>Project Recommendation</a>
                            </div>
                        </section>
                    </div>
                    <div className="fixmenu">
                        <img className="icon_fix" src="../resources/images/sv_fix_music.svg" alt="icon music" />
                        <img className="icon_fix_on" src="../resources/images/sv_fix_music_on.svg" alt="icon music" />
                        <section className="hidden_menu">
                            <div className="top">
                                <h1>Catalog</h1>
                            </div>
                            <p className="line1"></p>
                            <div className="menus">
                                <a>Song library</a>
                            </div>
                            <p className="line1"></p>
                            <div className="menus">
                                <a>Resistration</a>
                            </div>
                        </section>
                    </div>
                    <div className="fixmenu">
                        <img className="icon_fix" src="../resources/images/sv_fix_person.svg" alt="icon person" />
                        <img className="icon_fix_on" src="../resources/images/sv_fix_person_on.svg" alt="icon person" />
                        <section className="hidden_menu">
                            <div className="top">
                                <h1>Artist</h1>
                            </div>
                            <p className="line1"></p>
                            <div className="menus">
                                <a>List</a>
                            </div>
                            <p className="line1"></p>
                            <div className="menus">
                                <a>Resistration</a>
                            </div>
                        </section>
                    </div>
                    <div className="fixmenu">
                        <img className="icon_fix" src="../resources/images/sv_fix_data.svg" alt="icon data" />
                        <img className="icon_fix_on" src="../resources/images/sv_fix_data_on.svg" alt="icon data" />
                        <section className="hidden_menu">
                            <div className="top">
                                <h1>Reports</h1>
                            </div>
                            <p className="line1"></p>
                            <div className="menus">
                                <a>Detailed</a>
                            </div>
                            <p className="line1"></p>
                            <div className="menus">
                                <a>Reaal-time </a>
                            </div>
                            <p className="line1"></p>
                            <div className="menus">
                                <a>Industry database</a>
                            </div>
                        </section>
                    </div>
                    <div className="fixmenu">
                        <img className="icon_fix" src="../resources/images/sv_fix_people.svg" alt="icon people" />
                        <img className="icon_fix_on" src="../resources/images/sv_fix_people_on.svg" alt="icon people" />
                        <section className="hidden_menu">
                            <div className="top">
                                <h1>Connect</h1>
                            </div>
                            <p className="line1"></p>
                            <div className="menus">
                                <a>List</a>
                            </div>
                        </section>
                    </div>
                    <div className="fixmenu">
                        <img className="icon_fix" src="../resources/images/sv_fix_doctor.svg" alt="icon doctor" />
                        <img className="icon_fix_on" src="../resources/images/sv_fix_doctor_on.svg" alt="icon doctor" />
                        <section className="hidden_menu">
                            <div className="top">
                                <h1>Education</h1>
                            </div>
                            <p className="line1"></p>
                            <div className="menus">
                                <a>List</a>
                            </div>
                            <p className="line1"></p>
                            <div className="menus">
                                <a>Registration</a>
                            </div>
                        </section>
                    </div>
                    <div className="fixmenu">
                        <img className="icon_fix" src="../resources/images/sv_fix_card.svg" alt="icon card" />
                        <img className="icon_fix_on" src="../resources/images/sv_fix_card_on.svg" alt="icon card" />
                        <section className="hidden_menu">
                            <div className="top">
                                <h1>News Feed</h1>
                            </div>
                            <p className="line1"></p>
                            <div className="menus">
                                <a>List</a>
                            </div>
                            <p className="line1"></p>
                            <div className="menus">
                                <a>Resistration</a>
                            </div>
                        </section>
                    </div>
                    <div className="fixmenu">
                        <img className="icon_fix" src="../resources/images/sv_fix_headphone.svg" alt="icon headphone" />
                        <img className="icon_fix_on" src="../resources/images/sv_fix_headphone_on.svg" alt="icon headphone" />
                        <section className="hidden_menu">
                            <div className="top">
                                <h1>Service Center</h1>
                            </div>
                            <p className="line1"></p>
                            <div className="menus">
                                <a>List</a>
                            </div>
                            <p className="line1"></p>
                            <div className="menus">
                                <a>Resistration</a>
                            </div>
                        </section>
                    </div>
                </article>
            </section>
        )
    }
}

export default Fixmenu;
