import React from "react";
import ReactDOM from "react-dom";
import DataApi from "../DataApi";
import { data } from "../testData";

const api = new DataApi(data);

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      articles: api.getArticles(),
      authers: api.getAuthors()
    };
  }

  async componentDidMount() {}

  render() {
    return <h2>Hello React</h2>;
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
