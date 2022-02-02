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
                                <a className="nav-link" href="./">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#business" onclick="viewCategory('business')">Business</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#entertainment" onclick="viewCategory('entertainment')">Entertainment</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#health" onclick="viewCategory('health')">Health</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#science" onclick="viewCategory('science')">Science</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#sports" onclick="viewCategory('sports')">Sports</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#technology" onclick="viewCategory('technology')">Technology</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}