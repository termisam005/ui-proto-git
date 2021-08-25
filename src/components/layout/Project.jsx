export default function Project() {
    return (
        <article className="contain">
            <section className="contain_top">
                <div className="cttop_left">
                    <h1 className="top_title">Project</h1>
                    <a className="go_detail">
                        <img src="../resources/images/sv_drop.svg" alt="go detail" />
                    </a>
                </div>
            </section>
            <p className="line1"></p>
            <section className="contain_body">
                <article className="contact_line">
                    <div className="tab_line">
                        <p className="art on">Song</p>
                        <p className="art">Video</p>
                        <p className="art">Playlist</p>
                        <p className="art">Project</p>
                        <p className="art">Piched On</p>
                    </div>
                </article>
                <article className="drop_box">
                    <div className="drop_zone">
                        <img src="../resources/images/sv_drop.svg" alt="drop" />
                        <span className="word">
                            Drag and Drop New Songs Here
                        </span>
                    </div>
                </article>
            </section>
        </article>
    );
}