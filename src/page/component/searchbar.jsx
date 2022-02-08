import React from "react";

export default class SearchBar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            live: false,
            searchQuery: ""
        }
    }

    setSearch(value) {
        if (this.state.live) {
            this.setState({searchQuery: value}, () => this.props.searchQuery(this.state.searchQuery))
        } else {
            this.setState({ searchQuery: value })
        }
    }

    setLiveSearch(value) {
        this.setState({live: value})
    }

    searchClick = () => {
        this.props.searchQuery(this.state.searchQuery)
    }

    pressEnter = (event) => { 
        if (event.keyCode === 13) {
            event.preventDefault()
            this.searchClick()
        }
    }

    render() {
        return (
            <form className="container" id="search-form">
                <div className="d-flex my-2">
                    <input className="form-control me-sm-2" type="text" placeholder="Search" onKeyDown={this.pressEnter} onChange={event => this.setSearch(event.target.value)} ref={this.props.searchRef} />
                        <input className="btn btn-outline-success my-2 my-sm-0" type="button" value="Search" onClick={this.searchClick} ></input>
                </div>
                <div className="form-check form-switch">
                    <input className="form-check-input" type="checkbox" role="switch" onChange={event => this.setLiveSearch(event.target.checked)} />
                        <label className="form-check-label">Live search</label>
                </div>
            </form>
        )
    }
}