import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";

export class News extends Component {
  articles = [];
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page:1
    };
  }
  
async update(){
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&apiKey=4d63d0b1b27a4b5c9c3e1a77e76bea3c&category=${this.props.category}&page=${this.state.page} &pagesize=${this.props.pageSize}`;
    try {
      this.setState({
        loading:true
      })
      const res = await fetch(url);
      const data = await res.json();
      this.setState({
        articles: data.articles,
        totalResults:data.totalResults,
        loading:false
      });
  
    } catch (e) {
      console.log("something is not working");
    }
  }
  
async componentDidMount() {
this.update(); 
}

hanldeOnPrevious=async()=>{
  this.setState({
    page: this.state.page-1
  })
  this.update();
}

handleOnNext= async ()=>{
this.setState({
  page: this.state.page+1
})
this.update();
}

  render() {
    return (
      <>
        <div className="container my-3">
          <h1 className="text-center mb-5"> Top Headlines</h1>
         {this.state.loading && <Spinner/>}
          <div className="row">
            {!this.state.loading && this.state.articles.map((element) => {
              return (
                <div className="col-md-4" key={element.url}>
                  <NewsItem
                    title={element.title? element.title:"click below to get more"}
                    description={element.description}
                    imageUrl={element.urlToImage}
                    newsUrl={element.url}
                    author={element.author}
                    date={element.publishedAt}
                    source={element.source.name}/>
                </div>
              );
            })}
            <div className="container d-flex justify-content-between my-3">
            <button type="button" className="btn btn-dark" disabled={this.state.page<=1} onClick={this.hanldeOnPrevious}>   &#8592; Previous</button>
            <button type="button" className="btn btn-dark" disabled={this.state.page+1 > Math.ceil(this.state.totalResults/this.props.pageSize)} onClick={this.handleOnNext}>  Next &#x2192;</button>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default News;
