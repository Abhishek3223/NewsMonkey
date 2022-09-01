import React, { Component } from 'react'

export class newsitem extends Component {
    render() {
        let { title, desription, imageUrl, newsUrl, author, date, source } = this.props;
        // here title and desc are sent to each tag as props
        return (
            <div className="my-3">
                <div className="card " >
                    <img className="card-img-top" style={{ height: "250px" }} src={imageUrl} alt="Card image cap" />
                    <div className="card-body">
                        <h5 className="card-title">{(title) + '...'}
                            <span style={{left:'80%',zindex:1}} className="position-absolute top-0 translate-middle  bg-danger badge rounded-pill">
                                {source}
                            </span>
                        </h5>
                        <p className="card-text">{(desription) + '...'} </p>
                        <p className="card-text"><small className="text-muted">By {author ? author : 'Unknown'} on {new Date(date).toGMTString()} </small></p>
                        <a href={newsUrl} target="_blank" className="btn btn-sm btn-dark" rel="noreferrer" >Read more</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default newsitem