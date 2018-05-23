class DataApi {
  constructor(rawData) {
    this.rawData = rawData;
  }

  mapIntoObj(arr) {
    console.log(arr);
    return arr.reduce((acc, curr) => {
      acc[curr.id] = curr;
      return acc;
    }, {});
  }
  getArticles() {
    return this.mapIntoObj(this.rawData.articles);
  }

  getAuthers() {
    return this.mapIntoObj(this.rawData.authors);
  }
}

export default DataApi;
