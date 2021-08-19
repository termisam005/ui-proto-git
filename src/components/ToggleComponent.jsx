import React from 'react';
//import styles from "../styles/App.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind();
class ToggleComponent extends React.Component {
    state = {
        hcircle_on: false,
    };

    render() {
        const { hcircle_on } = this.state;

        return (
            <div onClick={this.clickCircle} className={cx("hcircle", { hcircle_on })}
                {...this.props} />
        )
    }

    clickCircle = () => {
        this.setState({
            hcircle_on: true,
        });
    };
}

export default ToggleComponent;
