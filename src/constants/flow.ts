const link = {
  allBadges:
    'https://stickers-flow3r-2eqj3fl3la-ue.a.run.app/v1/badges?sort=desc',
  badgeMarketData: (code: string) =>
    `https://stickers-flow3r-2eqj3fl3la-ue.a.run.app/v1/market/feed?code=${code}`,
  market: 'https://flowpodcast.com.br/mercado',
  profile: (user: string) =>
    `https://flow3r-api-master-2eqj3fl3la-ue.a.run.app//v3/user/profile/${user}`,
  ranking: 'https://stickers-flow3r-2eqj3fl3la-ue.a.run.app/v1/market/ranking'
}

const flow = { link }

export default flow
