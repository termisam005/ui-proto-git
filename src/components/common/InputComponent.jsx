function InputComponent(props) {
    return (
        <input type={props.type} className={props.class} placeholder={props.placeholder} />
    );
}

export default InputComponent;