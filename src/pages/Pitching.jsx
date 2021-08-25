import React, { useState } from "react";
import Header from "../components/header/Header";
import Modal from "../components/assets/Modal";

function Pitching() {
    // useState를 사용하여 open상태를 변경한다. (open일때 true로 만들어 열리는 방식)
    const [modalOpen, setModalOpen] = useState(false);

    const openModal = () => {
        setModalOpen(true);
    }
    const closeModal = () => {
        setModalOpen(false);
    }

    return (
        <div className="wrap">
            <Header />
            <div className="container">
                <div className="contents">
                    <h1>Pitching</h1>

                    <button onClick={openModal}>모달팝업</button>

                    <Modal open={modalOpen} close={closeModal} header="Modal heading">
                        <main>
                            리액트 함수형 모달 팝업창입니다.
                            쉽게 만들 수 있어요.
                            같이 만들어봐요!
                        </main>
                    </Modal>

                </div>
            </div>
        </div>
    );
}

export default Pitching;