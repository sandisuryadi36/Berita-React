import React from "react";
import Content from "./component/content";
import Footer from "./component/footer";
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
        this.searchRef = React.createRef()
    }

    changeCategory = (value) => {
        this.searchRef.current.value = ""
        this.setState({
            searchQuery: "",
            category: value,
            page: 1,
        })
    }

    changeSearch = (value) => {
        this.setState({
            searchQuery: value,
            page: 1,
        })
    }

    changePage = (value) => { 
        this.setState({page: value})
    }

    render() {
        return (
            <div>
                <Navbar category={this.changeCategory} />
                <SearchBar searchQuery={this.changeSearch} searchRef={this.searchRef} />
                <Content
                    lang={this.state.lang}
                    category={this.state.category}
                    searchQuery={this.state.searchQuery}
                    page={this.state.page}
                    changePage={this.changePage}
                />
                <Footer />
            </div>
        )
    }
}