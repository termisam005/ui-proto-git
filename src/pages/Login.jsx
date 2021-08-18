import { Link } from "react-router-dom";

export default function Login() {
    return (
        <div>
            <h1>로그인</h1>
            <div>
                <Link to="/main">메인화면</Link>
            </div>
        </div>
    );
}