import React from "react"
//import styles from "../styles/App.module.scss";

class ButtonComponent extends React.Component {
    state = {
        buttonOn: false,
    };

    render() {
        const isOn = this.state.buttonOn;

        return (
            <button onClick={() => this.setState({ buttonOn: !isOn })} className={isOn ? "button on" : "button"}
                {...this.props} />
        )
    }
}

export default ButtonComponent;