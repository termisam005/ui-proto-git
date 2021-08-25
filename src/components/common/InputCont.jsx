import InputComponent from "./InputComponent";

function InputCont(props) {
    return (
        <div className={props.class}>
            <p className="title">{props.title}</p>
            <div className={props.boxclass}>
                <span className="put_mark">
                    <img src="../resources/images/eye_gray.png" alt="see" />
                </span>
                <InputComponent type="text" class="wr_put" placeholder="admin" />
            </div>
        </div>
    );
}

export default InputCont;
