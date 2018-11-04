import React, { Component } from "react";
import { connect } from "react-redux";

class Page extends Component {
    getPageByPath = path => {
        const { pages } = this.props;
        const page = pages.find(p => p.path === path);
        return page;
    };
    render() {
        const { match, pages } = this.props;
        const path = match.params.path || "/";
        const page = this.getPageByPath(path);
        console.log("path: ", path);
        console.log("pages: ", pages);
        console.log("page: ", page);
        const pageTitle = (page && page.title) || "";
        const pageBody = (page && page.body) || "";
        return (
            <div className={"page-container"}>
                <h1>{pageTitle}</h1>
                <div className={"page-content"}>{pageBody}</div>
            </div>
        );
    }
}

const mapStateToProps = (state, props) => {
    return {
        pages: state.pages
    };
};

const mapActionsToProps = {};

export default connect(
    mapStateToProps,
    mapActionsToProps
)(Page);