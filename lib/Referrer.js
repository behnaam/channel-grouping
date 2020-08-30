export default class Referrer {
  constructor(url) {
    this.url = url;
  }

  get domain() {
    return this.uri?.origin;
  }

  get domainWithoutPrefix() {
    if (this.domain && this.domain.includes("www")) {
      return this.domain.replace(/^www\./, "");
    } else {
      return this.domain || "";
    }
  }

  get source() {
    return this.utm?.source || this.domainWithoutPrefix;
  }

  get medium() {
    return this.utm?.medium || "";
  }

  get term() {
    return this.utm?.term || "";
  }

  get uri() {
    if (!this._uri) {
      this.uri = this.url ? new URL(this.url) : {};
    }

    return this._uri;
  }

  set uri(value) {
    this._uri = value;
  }

  get utm() {
    return this.uri?.searchParams;
  }
}
