import React from "react";

export default class Card extends React.Component {
    constructor(props) { 
        super(props);
        this.state = { 
            
        };
    }

    render() { 
        let d = new Date(this.props.publishedAt);
        return (
            <div className="col">
                <div className="card">
                    <img className="card-img-top"
                        src={this.props.urlToImage}
                        alt="" />
                        <div className="card-body">
                            <p className="card-text"><small className="text-muted">Source: {this.props.source}</small></p>
                            <h4 className="card-title"><a href={this.props.url} target="_blank" rel="noreferrer">{this.props.title}</a></h4>
                            <p className="card-text">{this.props.description}</p>
                            <p className="card-text"><small className="text-muted">Published at: {d.toDateString()}</small></p>
                        </div>
                </div>
            </div>
        )
    }
}