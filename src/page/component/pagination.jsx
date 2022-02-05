import React from "react";

export default class Pagination extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            pageNow: props.pageNow,
        }
    }

    changePage = (page) => {
        return () => {
            this.setState({
                pageNow: page
            }, () => this.props.changePage(page))
        }
    }

    static getDerivedStateFromProps(props, state) { 
        if (props.pageNow !== state.pageNow) {
            return {
                pageNow: props.pageNow
            }
        }
        return null
    }

    render() {
        let prevButton = () => {
            if (this.state.pageNow !== 1) {
                return (
                    <li className="page-item" onClick={this.changePage(this.state.pageNow - 1)}>
                        <a className="page-link" href="#prev">Previous</a>
                    </li>
                )
            } else {
                return (
                    <li className="page-item disabled">
                        <a className="page-link" href="#prev">Previous</a>
                    </li>
                )
            }
        }

        let nextButton = () => { 
            if ((this.props.totalResults - (this.state.pageNow * 20)) > 0) {
                return (
                    <li className="page-item" onClick={this.changePage(this.state.pageNow + 1)}>
                        <a className="page-link" href="#next">Next</a>
                    </li>
                )
            } else {
                return (
                    <li className="page-item disabled">
                        <a className="page-link" href="#next">Next</a>
                    </li>
                )
            }
        }

        let prevPageNumber = () => { 
            let s
            let element = []
            if (this.state.pageNow - 2 <= 1) {
                s = 1
            } else s = this.state.pageNow - 2
            for (let i = s; i < this.state.pageNow; i++) {
                element.push(<li key={i} className="page-item" onClick={this.changePage(i)}><a className="page-link" href={`#${i}`}>{i}</a></li>)
            }
            return element
        }

        let nextPageNumber = () => { 
            let element = []
            for (let i = this.state.pageNow; i < this.state.pageNow + 2; i++) {
                if ((this.props.totalResults - (i * 20)) > 0) {
                    element.push(<li key={i+1} className="page-item"><a className="page-link" href={`#${i+1}`} onClick={this.changePage(i+1)}>{i + 1}</a></li>)
                }
            }
            return element
        }

        return (
            <nav aria-label="Page navigation" className="container" id="pagination">
                <ul className="pagination pagination-sm justify-content-end">
                    {prevButton()}
                    {prevPageNumber()}
                    <li key={this.state.pageNow} className="page-item active"><p className="page-link disabled" >{this.state.pageNow}</p></li>
                    {nextPageNumber()}
                    {nextButton()}
                </ul>
            </nav>
        )
    }
}