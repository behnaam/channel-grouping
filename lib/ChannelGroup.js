import {
  CHANNEL_GROUPS,
  CHANNEL_GROUP_REGEX,
  CHANNEL_GROUP_STRING
} from './utils/enums'

export default class ChannelGroup {
  static identify (medium, source) {
    if (CHANNEL_GROUP_REGEX.EMAIL.test(medium)) {
      return CHANNEL_GROUPS.EMAIL
    }

    if (CHANNEL_GROUP_REGEX.AFFILIATES.test(medium)) {
      return CHANNEL_GROUPS.AFFILIATES
    }

    if (CHANNEL_GROUP_REGEX.REFERRAL.test(medium)) {
      return CHANNEL_GROUPS.REFERRAL
    }

    if (CHANNEL_GROUP_REGEX.ORGANIC_SEARCH.test(medium)) {
      return CHANNEL_GROUPS.ORGANIC_SEARCH
    }

    if (CHANNEL_GROUP_REGEX.PAID_SEARCH.test(medium)) {
      return CHANNEL_GROUPS.PAID_SEARCH
    }

    if (CHANNEL_GROUP_REGEX.OTHER_ADVERTISING.test(medium)) {
      return CHANNEL_GROUPS.OTHER_ADVERTISING
    }

    if (CHANNEL_GROUP_REGEX.DISPLAY.test(medium)) {
      return CHANNEL_GROUPS.DISPLAY
    }

    if (CHANNEL_GROUP_REGEX.SOCIAL.test(medium)) {
      return CHANNEL_GROUPS.SOCIAL
    }

    if (source === CHANNEL_GROUP_STRING.DIRECT) {
      return CHANNEL_GROUPS.DIRECT
    }

    if (source === CHANNEL_GROUP_STRING.INTERNAL) {
      return CHANNEL_GROUPS.INTERNAL
    }

    if (medium !== CHANNEL_GROUP_STRING.OTHER) {
      return CHANNEL_GROUPS.OTHER
    }

    return CHANNEL_GROUPS.REFERRAL
  }
}
