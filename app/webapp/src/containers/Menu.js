import React, { Component } from "react";
import { connect } from "react-redux";
import { history } from "../history";

class Menu extends Component {
    onMenuItemClick = menu => {
        history.push(menu.path);
    };
    render() {
        const { menu } = this.props;
        const { items } = menu;
        return (
            <div className={"app-menu"}>
                <ul className={"menu"}>
                    {items.map((menu, idx) => {
                        return (
                            <li onClick={() => this.onMenuItemClick(menu)} key={idx}>
                                <a>{menu.title}</a>
                            </li>
                        );
                    })}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    menu: state.menu
});

const mapDispatchToProps = dispatch => ({});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Menu);