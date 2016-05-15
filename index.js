module.exports = class GETParamBuilder {
  constructor(url = "") {
    this.url = url;
    this.args = 0;
  }
  getURL() {
    return this.url;
  }
  add(key, value) {
    if(this.args++ == 0)
      this.url += '?';
    else
      this.url += '&';
    this.url += encodeURIComponent(key) + '=' + encodeURIComponent(value);
    return this;
  }
};
