import React from "react";

export default class Pagination extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            pageNow: props.pageNow,
            totalResults: props.totalResults,
        }
    }

    prevPage = () => {
        this.setState({
            pageNow: this.state.pageNow - 1,
        })
        this.props.prevPage(this.state.pageNow - 1)
    }

    nextPage = () => { 
        this.setState({
            pageNow: this.state.pageNow + 1,
        })
        this.props.nextPage(this.state.pageNow + 1)
    }

    render() {
        let prevButton = () => {
            if (this.state.pageNow !== 1) {
                return (
                    <li className="page-item" onClick={this.prevPage()}>
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
            if ((this.state.totalResults - (this.state.pageNow * 20)) > 0) {
                return (
                    <li className="page-item" onClick={this.nextPage()}>
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
            if (this.state.pageNow - 2 <= 1) {
                s = 1
            } else s = this.state.pageNow - 2
            for (let i = s; i < this.state.pageNow; i++) {
                return (
                    <li class="page-item" onClick={this.prevPage()}><a class="page-link" href={`#${i}`}>{i}</a></li>
                )
            }
        }

        let nextPageNumber = () => { 
            for (let i = this.state.pageNow; i < this.state.pageNow + 2; i++) {
                if ((this.state.totalResults - (i * 20)) > 0) {
                    return (
                        <li className="page-item"><a className="page-link" href={`#${i}`} onClick={this.nextPage()}>{i + 1}</a></li>
                    )
                }
            }
        }

        console.log(this.state.totalResults)
        return (
            <nav aria-label="Page navigation" className="container" id="pagination">
                <ul className="pagination pagination-sm justify-content-end">
                    {prevButton()}
                    {prevPageNumber()}
                    <li className="page-item active"><p className="page-link disabled" >{this.state.pageNow}</p></li>
                    {nextPageNumber()}
                    {nextButton()}
                </ul>
            </nav>
        )
    }
}