import React from "react";

const styles = {
  article: {
    paddingBottom: 10,
    borderBottomStyle: "solid",
    borderBottomColor: "#aaa",
    borderBottomWidth: 1,
    marginBottom: 10
  },
  title: {
    fontwWeight: "bold"
  },
  date: {
    fontSize: "0.8em",
    color: "#888"
  },
  author: {
    paddingTop: 10,
    paddingBottom: 10
  },
  body: {
    paddingLeft: 20
  }
};

const Article = props => {
  const { articleActions, article } = props;
  //console.log(props);
  const author = articleActions.lookupAuthor(article.authorId);

  return (
    <div style={styles.article}>
      <div style={styles.title}>{article.title}</div>
      <div style={styles.date}>{new Date(article.date).toDateString()}</div>
      <div style={styles.auther}>
        <a href={author.website}>
          {author.firstName} {author.lastName}
        </a>
      </div>
      <div style={styles.body}>{article.body}</div>
    </div>
  );
};
export default Article;
