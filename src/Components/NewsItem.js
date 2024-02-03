import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let {title,description,imageUrl,newsUrl,author,date,source} = this.props;
    return (
        <div className="card">
        <img src={imageUrl?imageUrl : "https://www.tomshw.it/images/images/2023/07/generica-luglio-283709.jpg"} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}...</h5>
          <p className="card-text">
            {description}...
          </p>
          
          <p className="card-text"><small className="text-success">By {author===null?"unknown" : author} on {new Date(date).toGMTString()}</small></p>
          <a href={newsUrl} target='_blank' rel="noreferrer"  className="btn btn-dark">
           Read More
          </a>
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" style={{left:"90%",zIndex:"1"}}>
           {source}
            
          </span>
        </div>
      </div>
    )
  }
}

export default NewsItem
