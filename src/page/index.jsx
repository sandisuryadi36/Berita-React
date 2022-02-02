import React from "react";
import Navbar from "./component/navbar";

export default class Page extends React.Component {
    state = {
        category: "general"
    }

    changeCategory = (value) => {
        this.setState({category: value})
    }

    render() {
        return (
            <Navbar category={this.changeCategory} />
        )
    }
}