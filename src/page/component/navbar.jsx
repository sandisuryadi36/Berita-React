import React from "react";

export default class Navbar extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-expand-md navbar-light bg-light sticky-top">
                <div className="container">
                    <a className="navbar-brand" href="./">News Portal</a>
                    <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse"
                        data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="collapsibleNavId">
                        <ul className="navbar-nav me-auto mt-2 mt-lg-0">
                            <li className="nav-item active">
                                <a className="nav-link" href="#general" onClick={() => this.props.category("general")} >General</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#business" onClick={() => this.props.category("business")} >Business</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#entertainment" onClick={() => this.props.category("entertainment")} >Entertainment</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#health" onClick={() => this.props.category("health")} >Health</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#science" onClick={() => this.props.category("science")} >Science</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#sports" onClick={() => this.props.category("sports")} >Sports</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#technology" onClick={() => this.props.category("techmology")} >Technology</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}