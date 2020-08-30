export const CHANNEL_GROUPS = Object.freeze({
  EMAIL: 'Email',
  AFFILIATES: 'Affiliates',
  REFERRAL: 'Referral',
  ORGANIC_SEARCH: 'Organic Search',
  PAID_SEARCH: 'Paid Search',
  OTHER_ADVERTISING: 'Other Advertising',
  DISPLAY: 'Display',
  SOCIAL: 'Social',
  DIRECT: 'Direct',
  INTERNAL: 'Internal',
  OTHER: 'Other'
})

export const CHANNEL_GROUP_REGEX = Object.freeze({
  EMAIL: /^email$/i,
  AFFILIATES: /^affiliate$/i,
  REFERRAL: /^referral$/i,
  ORGANIC_SEARCH: /^(organic|search)$/i,
  PAID_SEARCH: /^(cpc|ppc|paidsearch)$/i,
  OTHER_ADVERTISING: /^(cpv|cpa|cpp)$/i,
  DISPLAY: /^(display|cpm|banner)$/i,
  SOCIAL: /^(social|social-network|social-media|sm|social network|social media)$/i
})

export const CHANNEL_GROUP_STRING = Object.freeze({
  OTHER: '(none)',
  DIRECT: '(direct)',
  INTERNAL: '(internal)'
})
