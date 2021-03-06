import React from "react";
import ReactDOM from "react-dom";
import DataApi from "../DataApi";
import { data } from "../testData";
import ArticleList from "./ArticleList";

const api = new DataApi(data);

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      articles: api.getArticles(),
      authors: api.getAuthors()
    };
  }

  articleActions = {
    lookupAuthor: authorId => this.state.authors[authorId]
  };

  render() {
    return (
      <ArticleList
        articles={this.state.articles}
        articleActions={this.articleActions}
      />
    );
  }
}

if (typeof window !== 'undefined') {
  ReactDOM.hydrate(<App />, document.getElementById("app"));
}

export default App;
