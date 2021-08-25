import $ from "jquery";
export default function Task() {

    return (
        <article className="contain">
            <section className="contain_top">
                <div className="cttop_left">
                    <h1 className="top_title">Tasks</h1>
                    <a className="go_detail">
                        <img src="../resources/images/sv_drop.svg" alt="go detail" />
                    </a>
                </div>
                <p className="pen">
                    <img src="../resources/images/sv_note_pen.svg" alt="pen" />
                </p>
            </section>
            <p className="line1"></p>
            <section className="contain_body">
                <article className="contact_line">

                    <div className="tab_line">
                        <p className="tab on">All</p>
                        <p className="tab">Rush</p>
                        <p className="tab">Urgent</p>
                    </div>

                    <div className="contact">
                        <span className="rlbt">
                            <img src="../resources/images/sv_arr_left_mini.svg" alt="arrow" />
                        </span>
                        <span className="rlbt">
                            <img src="../resources/images/sv_arr_right_mini.svg" alt="arrow" />
                        </span>
                    </div>
                </article>
                <article className="card_line">
                    <div className="the_card">
                        <p className="delete">
                            <img src="../resources/images/card_x.png" alt="delete" />
                        </p>
                        <dl className="card_dl">
                            <dt>Create a Project</dt>
                            <dd>
                                First impressions really do count.
                                A good Profile also helps get you found
                            </dd>
                        </dl>
                    </div>
                    <div className="the_card">
                        <p className="delete">
                            <img src="../resources/images/card_x.png" alt="delete" />
                        </p>
                        <dl className="card_dl">
                            <dt>Create a Project</dt>
                            <dd>
                                Create your won project and collaboate with
                                oher artists and professionals.
                            </dd>
                        </dl>
                    </div>
                    <div className="the_card">
                        <p className="delete">
                            <img src="../resources/images/card_x.png" alt="delete" />
                        </p>
                        <dl className="card_dl">
                            <dt>Upload music</dt>
                            <dd>
                                Let's start with the basics and get soume tracks
                                uploaded and metadata added.
                            </dd>
                        </dl>
                    </div>
                    <div className="the_card">
                        <p className="delete">
                            <img src="../resources/images/card_x.png" alt="delete" />
                        </p>
                        <dl className="card_dl">
                            <dt>Add Song info</dt>
                            <dd>
                                Our Service needs essential song info search
                                your music and get it submitted.
                            </dd>
                        </dl>
                    </div>
                </article>
            </section>
        </article>
    );
}