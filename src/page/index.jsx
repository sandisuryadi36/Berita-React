import React from "react";
import Content from "./component/content";
import Navbar from "./component/navbar";
import SearchBar from "./component/searchbar";

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

    changeSearch = (value) => {
        this.setState({searchQuery: value})
    }

    render() {
        return (
            <div>
                <Navbar category={this.changeCategory} />
                <SearchBar searchQuery={this.changeSearch} />
                <Content
                    lang={this.state.lang}
                    category={this.state.category}
                    searchQuery={this.state.searchQuery}
                    page={this.state.page}
                />
            </div>
        )
    }
}