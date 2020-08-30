import Visit from "./Visit";

export default class Attribution {
  static analyze(referrerUrl, landingPageUrl) {
    return new Visit(referrerUrl, landingPageUrl).attributionData;
  }
}
