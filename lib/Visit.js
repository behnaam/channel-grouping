import ChannelGroup from "./ChannelGroup";
import LandingPage from "./LandingPage";
import Referrer from "./Referrer";
import { CHANNEL_GROUP_STRING } from "./utils/enums";

export default class Visit {
  constructor(referrerUrl, landingPageUrl) {
    this.referrerUrl = referrerUrl;
    this.landingPageUrl = landingPageUrl;
  }

  get attributionData() {
    return {
      referrerDomain: this.referrer?.domain || "",
      landingPageDomain: this.landingPage?.domain || "",
      medium: this.medium || "",
      source: this.source || "",
      term: this.term || "",
      campaign: this.landingPage?.utm?.campaign || "",
      content: this.landingPage?.utm?.content || "",
      channelGroup: this.channelGroup || "",
    };
  }

  get channelGroup() {
    return ChannelGroup.identify(this.medium, this.source);
  }

  get isInternal() {
    return this.landingPage?.domain === this.referrer?.domain;
  }

  get landingPage() {
    if (!this._landingPage) {
      this.landingPage = new LandingPage(this.landingPageUrl);
    }

    return this._landingPage;
  }

  set landingPage(value) {
    this._landingPage = value;
  }

  get medium() {
    if (this.landingPage?.utm?.medium) {
      return this.landingPage.utm.medium;
    }

    if (this.referrer?.medium) {
      return this.referrer.medium;
    }

    return CHANNEL_GROUP_STRING.OTHER;
  }

  get referrer() {
    if (!this._referrer) {
      this.referrer = new Referrer(this.referrerUrl);
    }

    return this._referrer;
  }

  set referrer(value) {
    this._referrer = value;
  }

  get source() {
    if (this.landingPage?.utm?.source) {
      return this.landingPage.utm.source;
    }

    if (this.isInternal) {
      return CHANNEL_GROUP_STRING.INTERNAL;
    }

    if (this.referrer?.source) {
      return this.referrer.source;
    }

    return CHANNEL_GROUP_STRING.DIRECT;
  }

  get term() {
    return this.landingPage?.utm?.term || this.referrer?.term;
  }
}
