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
