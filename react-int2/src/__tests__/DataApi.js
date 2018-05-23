import DataApi from "../DataApi";
import { data } from "../testData";

const api = new DataApi(data);

describe("data api", () => {
  it("expose articles as an object title", () => {
    const articles = api.getArticles();
    const articleId = data.articles[0].id;
    const articleTitle = data.articles[0].title;

    expect(articles).toHaveProperty(articleId);
    expect(articles[articleId].title).toBe(articleTitle);
  });

  it("expose articles as an object firstname", () => {
    const authors = api.getAuthers();
    const authorId = data.authors[0].id;
    const authorName = data.authors[0].firstName;

    expect(authors).toHaveProperty(authorId);
    expect(authors[authorId].firstName).toBe(authorName);
  });
});
