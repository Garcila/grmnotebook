import React, { Component } from "react";

export default class newsfeed extends Component {
  constructor(props) {
    super(props);
    this.getData.bind(this);
  }

  state = { data: [] };
  componentDidMount() {
    this.getData();
  }

  render() {
    return (
      <div style={this.style} className="m-0">
        <h1 className="text-center pb-3 border-bottom border-primary">News</h1>
        {this.state.data}
      </div>
    );
  }

  appendData(data) {
    this.setState({
      data: data.articles.map(article => (
        <div key={article.title} className="mb-5">
          <p>
            <strong>{article.title}</strong>
          </p>
          <p>{article.description}</p>

          <a href={article.url}>Read More</a>
        </div>
      ))
    });
  }

  getData() {
    fetch(
      "https://newsapi.org/v2/top-headlines?sources=google-news&apiKey=20a722fdac8449d9aa7fda600c6a5740"
    )
      .then(response => {
        return response.json();
      })
      .then(myJson => {
        this.appendData(myJson);
      });
  }

  style = {
    width: "100%",
    overflow: "auto"
  };
}
