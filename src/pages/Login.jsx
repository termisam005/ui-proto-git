import InputComponent from "../components/common/InputComponent";
import { Link } from "react-router-dom";

export default function Login() {
    return (
        <div className="wrap wrap_login">
            <section className="wrap_login">

                <article className="zone_log">
                    <section className="log_text">
                        <div className="the_title">
                            <h1>
                                <span>Welcome to</span>
                                <img src="../resources/images/logo_big.png" alt="spawrk" />
                            </h1>
                            <p>Meet the artists of the world now!</p>
                        </div>
                    </section>

                    <section className="log_box">
                        <div className="logbox_in">

                            <article className="form_group form_logbox">
                                <div className="log_conts">
                                    <div className="put_cont">
                                        <p className="title">E-mail</p>
                                        <div className="putt_box">
                                            <InputComponent type="text" class="wr_put" placeholder="admin" />
                                        </div>
                                    </div>

                                    <div className="put_cont">
                                        <p className="title">Password</p>
                                        <div className="putt_box did">
                                            <span className="put_mark">
                                                <img src="../resources/images/eye_gray.png" alt="see" />
                                            </span>
                                            <InputComponent type="password" class="wr_put" placeholder="passwod" />
                                        </div>
                                    </div>

                                </div>
                                <div className="log_button_conts">
                                    <div className="button_line">
                                        <button type="button" className="button on">
                                            <Link to="/main">Login</Link>
                                        </button>
                                        <button type="button" className="button society">
                                            Login in with Google
                                        </button>
                                        <button type="button" className="button society">
                                            Login in with Facebook
                                        </button>
                                        <button type="button" className="button society">
                                            Sign in with Apple
                                        </button>
                                    </div>
                                    <div className="line_cont">
                                        <span className="word">Don’t have an account?</span>
                                        <p className="line1"></p>
                                    </div>
                                    <div className="button_line">
                                        <button type="button" className="button">
                                            Create a new account
                                        </button>
                                    </div>
                                </div>
                            </article>

                        </div>
                    </section>
                </article>

            </section>
        </div>
    );
}