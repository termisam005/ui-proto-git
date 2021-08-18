import { Link } from "react-router-dom";

export default function Header() {

    const onSubmit = () => {
        alert('검색 목록을 작성하세요.');
    };

    const onCircle = () => {
        let currenMenu;
        let cicZone = document.querySelectorAll('.hcircle');
        let theDark = document.querySelector('.hidd_dark');

        function circleHandler() {
            if (currenMenu) {
                currenMenu.classList.remove('on');
            }
            this.classList.add('on');
            currenMenu = this;
            theDark.style.display = "block";

            theDark.addEventListener('click', function () {
                currenMenu.classList.remove('on');
                this.style.display = "none";
            });
        }
        for (var i = 0; i < cicZone.length; i++) {
            cicZone[i].addEventListener('click', circleHandler);
        }
    }

    return (
        <header>
            <div className="header_line">
                <section className="header_left">
                    <p className="btn_menu"></p>
                    <h1 className="hd_logo">
                        <Link to="/main" title="Sparwk">
                            <img src="../resources/images/logo.png" alt="Sparwk" />
                        </Link>
                    </h1>
                    <nav>
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
                        <button type="button" className="btn_srch" onClick={onSubmit}></button>
                        <input type="text" className="hd_input" placeholder="Search" />
                    </article>
                </section>

                <section className="header_right">
                    <article className="hd_icline">
                        <div className="hidd_dark"></div>
                        <div onClick={onCircle} className="hcircle">
                            <p className="circle_p">
                                <img src="../resources/images/clock.png" alt="time" />
                            </p>
                        </div>
                        <div onClick={onCircle} className="hcircle">
                            <p className="circle_p">
                                <img src="../resources/images/nation_usa.png" alt="usa" />
                            </p>
                            <section className="hidd_zone">
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
                        <div onClick={onCircle} className="hcircle">
                            <p className="circle_p btn_message">
                                <span className="cout">2</span>
                                <img src="../resources/images/talk.png" alt="message" />
                            </p>
                        </div>
                        <div onClick={onCircle} className="hcircle">
                            <p className="circle_p">
                                <img src="../resources/images/bell.png" alt="alarm" />
                            </p>
                        </div>
                        <div onClick={onCircle} className="hcircle">
                            <p className="circle_p prof_c32">
                                <span className="line_over"></span>
                                <img src="../resources/images/thumb_ex1.jpg" alt="profile photo" />
                            </p>
                            <section className="hidd_zone">
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

            <section className="gr_fixmenu">
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

            <section className="gr_message">
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
            </section>
        </header>
    );
}
