import React from "react";

export default class Footer extends React.Component { 
    render() {
        return (
            <div className="container">
                <footer className="pt-5">
                    <div className="d-flex justify-content-between pt-4 my-4 border-top">
                        <p>© 2022 Sandi Suryadi. All rights reserved.</p>
                        <ul className="list-unstyled d-flex">
                            <li className="ms-3"><a className="link-dark" href="#tw"><i className="fab fa-twitter-square"></i></a></li>
                            <li className="ms-3"><a className="link-dark" href="#ig"><i className="fab fa-instagram"></i></a></li>
                            <li className="ms-3"><a className="link-dark" href="#fb"><i className="fab fa-facebook-square"></i></a></li>
                        </ul>
                    </div>
                </footer>
            </div>
        )
    }
}