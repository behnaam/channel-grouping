export default class LandingPage {
  constructor(url) {
    this.url = url;
  }

  get domain() {
    return this.uri.origin;
  }

  get domainWithoutPrefix() {
    if (this.domain && this.domain.includes("www")) {
      return this.domain.replace(/^www\./, "");
    } else {
      return this.domain || "";
    }
  }

  get uri() {
    if (!this._uri) {
      this.uri = new URL(this.url);
    }

    return this._uri;
  }

  set uri(value) {
    this._uri = value;
  }

  get utm() {
    return this.uri.searchParams;
  }
}
