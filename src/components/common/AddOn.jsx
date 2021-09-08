import React, { Component } from "react";


class AddOn extends Component {

    state = {
        isToggleOn: false,
    }

    render() {
        const isOn = this.state.isToggleOn;

        return (
            <button className={isOn ? "button society on" : "button society"} onClick={() => this.setState({ isToggleOn: !isOn })}
                {...this.props} />
        );
    }
}

export default AddOn;