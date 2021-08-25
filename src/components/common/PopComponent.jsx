import React from "react";

const PopComponent = (props) => {

    const { open, close } = props;

    return (
        <section className={open ? 'pop_contents active' : 'pop_contents'}>
            <div onClick={close} className={"pop_bg"}></div>
            <div className={"pop_body"}>
                <div classNamep={"pop_conts"}>
                    <p>{props.pop_txt}</p>
                </div>
                <button className="close" onClick={close}> close </button>
            </div>
        </section>
    )
}

export default PopComponent;

