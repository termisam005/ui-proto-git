import { useState } from "react";
import Header from "../components/header/Header";
import PopComponent from "../components/common/PopComponent";

export default function Collabo() {
    const [popUps, setpopUps] = useState(false);

    const openPop = () => {
        setpopUps(true);
    }
    const closePop = () => {
        setpopUps(false);
    }

    return (
        <div className="wrap">
            <Header />
            <div className="container">
                <div className="contents">
                    <h1>Collabo</h1>

                    <button onClick={openPop}>팝업오픈</button>

                    <PopComponent open={popUps} close={closePop} pop_txt={"팝업테스트"} />
                </div>
            </div>
        </div>
    )
}

