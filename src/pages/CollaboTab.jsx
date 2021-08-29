import { useState } from "react";
import Header from "../components/header/Header";

export default function Collabo() {

    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    }

    return (
        <div className="wrap">
            <Header />
            <div className="container">

                <div className="dpflx">
                    <div className={toggleState === 1 ? "tabs active_tabs" : "tabs"} onClick={() => toggleTab(1)}>
                        Tab 1
                    </div>
                    <div className={toggleState === 2 ? "tabs active_tabs" : "tabs"} onClick={() => toggleTab(2)}>
                        Tab 2
                    </div>
                    <div className={toggleState === 3 ? "tabs active_tabs" : "tabs"} onClick={() => toggleTab(3)}>
                        Tab 3
                    </div>
                </div>

                <div className="content_tab">
                    <div className={toggleState === 1 ? "cont active_cont" : "cont"}>
                        <h2>Cont1</h2>
                        <p>
                            1bsdfioiflkejfoiwefjofwofofjofjlksf;d' fklwefjweiofjieofe
                        </p>
                    </div>
                    <div className={toggleState === 2 ? "cont active_cont" : "cont"}>
                        <h2>Cont2</h2>
                        <p>
                            2bsdfioiflkejfoiwefjofwofofjofjlksf;d' fklwefjweiofjieofe
                        </p>
                    </div>
                    <div className={toggleState === 3 ? "cont active_cont" : "cont"}>
                        <h2>Cont3</h2>
                        <p>
                            3bsdfioiflkejfoiwefjofwofofjofjlksf;d' fklwefjweiofjieofe
                        </p>
                    </div>
                </div>

            </div>
        </div>
    )
}

