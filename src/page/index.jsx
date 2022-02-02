import React from "react";
import Navbar from "./component/navbar";

export default class Page extends React.Component {
    constructor() {
        super()
        this.state = {
            lang: "id",
            category: "general",
            searchQuery: "",
            page: 1
        }
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