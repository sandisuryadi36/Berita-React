import React from "react";

export default class SearchBar extends React.Component {
    constructor() {
        super()
        this.state = {
            live: false,
            searchQuery: ""
        }
    }

    setSearch(value) {
        if (this.state.live) {
            this.setState({searchQuery: value}, () => this.props.searchQuery(this.state.searchQuery))
        }
    }

    setLiveSearch(value) {
        this.setState({live: value})
    }

    render() {
        return (
            <form className="container" id="search-form">
                <div className="d-flex my-2">
                    <input className="form-control me-sm-2" type="text" placeholder="Search" id="search-bar" name="search" onChange={event => this.setSearch(event.target.value)} />
                        <input className="btn btn-outline-success my-2 my-sm-0" type="button" id="search-btn" name="search" value="Search"></input>
                </div>
                <div className="form-check form-switch">
                    <input className="form-check-input" type="checkbox" role="switch" id="live-search-check" onChange={event => this.setLiveSearch(event.target.checked)} />
                        <label className="form-check-label">Live search</label>
                </div>
            </form>
        )
    }
}