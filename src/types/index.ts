/* eslint-disable camelcase */
export interface BadgeData {
  name: string
  code: string
  src: string
  high: string
  description: string
  created_at: string
  hq: boolean
  updated_at: string
  starts_on: string
  creator_profile_id: string
  status: boolean
  expires_at: string
  count: number
  badge_id: string
  percentage_badge: number
}

export interface BadgesResponse {
  badges: BadgeData[]
  status: { error: string; message: string; reason?: string }
  // eslint-disable-next-line camelcase
  total_badges: number
}

export interface MarketFeedData {
  user: {
    avatar: string
    username: string
  }
  action: { label: string }
  value: { sparks: number }
  executed_at: string
}

export interface MarketTradeData {
  starts_on: string
  src: string
  description: string
  name: string
  expires_at: string
  value: number
  updated_at: string
  hq: boolean
  accept_sparks: boolean
  status: boolean
  code: string
  type: string
  created_at: string
  high: string
  accept_trade: false
  offer:
    | {
        badge: {
          enabled: boolean
          value: number
        }
        sparks: { enabled: boolean; value: number }
      }
    | undefined
  trade:
    | {
        badge: {
          enabled: boolean
          value: number
        }
        sparks: { enabled: boolean; value: number }
      }
    | undefined
}

export interface MarketBadgeResponse {
  status: {
    error: boolean
    message: string
    reason: string
  }
  feed: MarketFeedData[]
  actualOffersDesc: MarketTradeData[]
  actualOffersAsc: MarketTradeData[]
  actualTradesDesc: MarketTradeData[]
  actualTradesAsc: MarketTradeData[]
}
