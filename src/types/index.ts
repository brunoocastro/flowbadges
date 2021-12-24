/* eslint-disable camelcase */
export interface BadgesResponse {
  badges?: {
    hq: boolean
    count: number
    high: any
    updated_at: string
    code: string
    starts_on: string
    name: string
    description: string
    created_at: string
    status: boolean
    src: string
    expires_at: string
    badge_id: string
    percentage_badge: number
  }[]
  status?: { error: string; message: string; reason: any }
  total_badges?: number
}
