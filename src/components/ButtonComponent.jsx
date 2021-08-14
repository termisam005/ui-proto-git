import styles from "../styles/App.module.scss";
import React from "react";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);
class ButtonComponent extends React.Component {
    state = {
        button_on: false,
    };

    render() {
        const { button_on } = this.state;

        return (
            <button onClick={this.startLoading} className={cx("button", { button_on })}
                {...this.props} />
        )
    }

    startLoading = () => {
        this.setState({
            button_on: true,
        });
        setTimeout(() => {
            this.setState({
                button_on: false,
            });
        }, 1000);
    };
}



export default ButtonComponent;