import React, { Component } from "react";
import Menu from "../containers/Menu";

class Header extends Component {
    render() {
        return (
            <header className={"app-header"}>
                <Menu />
            </header>
        );
    }
}

export default Header;