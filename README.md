# channel-grouping

channel-grouping is a marketing channel attribution and referrer parsing ([UTM](https://support.google.com/analytics/answer/1033863?hl=en)) client-side library written in Javascript. It uses [Google Analytics Default Channel Definitions](https://support.google.com/analytics/answer/3297892?hl=en) to attribute traffic on your site to specific channels.

## [](https://github.com/segmentio/inbound#how-to-use)How To Use

### [](https://github.com/behnaam/channel-grouping#install)Install

#### npm

    npm install --save channel-grouping

#### Yarn

    yarn add -s channel-grouping

### [](https://github.com/segmentio/inbound#channel-groups)Channel Groups

#### Email

When Landing Page UTM Medium matches Regex `/^email$/i`

#### Affiliates

When Landing Page UTM Medium matches Regex `/^affiliate$/i`

#### Referral

When Landing Page UTM Medium matches Regex `/^referral$/i`

#### Organic Search

When Landing Page UTM Medium matches Regex `/^(organic|search)$/i`

#### Paid Search

When Landing Page UTM Medium matches Regex `/^(cpc|ppc|paidsearch)$/i`

#### Other Advertising

When Landing Page UTM Medium matches Regex `/^(cpv|cpa|cpp)$/i`

#### Display

When Landing Page UTM Medium matches Regex `/^(display|cpm|banner)$/i`

#### Social

When Landing Page UTM Medium matches Regex `/^(social|social-network|social-media|sm|social network|social media)$/i`

#### Direct

When Landing Page or Referrer has no UTM Source

#### Internal

When Landing Page Hostname and Referrer Hostname are the same

#### Other

All other cases, while UTM Medium does not equal `(none)`

## Examples

#### Here is a simple example of usage:

    import { Attribution } from "channel-grouping";

    const ChannelGroup = Attribution.analyze(document.referrer, window.location.href);

    console.log(ChannelGroup);

#### Log output:

    {
        campaign: ""
        channelGroup: "Direct"
        content: ""
        landingPageDomain: "http://localhost:3001"
        medium: "(none)"
        referrerDomain: "",
        source: "(direct)",
        term: ""
    }