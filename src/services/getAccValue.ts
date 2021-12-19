import { useFetch } from '../hooks/useFetch'

async function getMediaFromBadge(badge: string) {
  const linkValue = `https://stickers-flow3r-2eqj3fl3la-ue.a.run.app/v1/market/graph?code=${badge}&type=trade&range=7days`
  try {
    const req = await axios.get(linkValue)
    const valuesArray = []
    req.data.dataset.forEach(value => {
      if (value > 0) valuesArray.push(value)
    })

    if (Array.isArray(valuesArray) && !valuesArray.length) {
      console.log(`Média pro emblema ${badge} é nula`)
      return 0
    }
    const totalValue = valuesArray.reduce((soma, i) => soma + i)
    const media = Number(totalValue / valuesArray.length)
    // console.log(`Média pro emblema ${badge}: ${media} sparks`);
    return media
  } catch {
    console.log(`Deu erro pro emblema ${badge}`)
    return 0
  }
}

async function getUserBadges(username: string) {
  console.log('Username', username)
  const linkAccBadges = `https://flow3r-api-master-2eqj3fl3la-ue.a.run.app//v2/user/badges/${username}`

  const accBadges = await useFetch<>(linkAccBadges)

  const badgesList = []

  let badgesArray = accBadges.badges

  badgesArray = badgesArray.sort(() => Math.random() - 0.5)

  badgesArray.forEach(element => {
    if (element.code) badgesList.push(element.code)
  })

  return badgesList
}

export async function getBadgesData() {
  const linkAccBadges = `https://flow3r-api-master-2eqj3fl3la-ue.a.run.app//v2/user/badges/monark`

  const accBadges = await axios.get(linkAccBadges)

  const badgesList = {}

  let badgesArray = accBadges.data.badges

  badgesArray = badgesArray.sort(() => Math.random() - 0.5)

  badgesArray.forEach(element => {
    if (element.code) badgesList[element.code] = element
  })

  return badgesList
}

const getAccValue = async (username: string) => {
  try {
    const badgesList = await getUserBadges(username)
    console.log('All Badges(', badgesList.length, ') :', badgesList)

    let valueInSparks = 0
    let failed = 0

    for (const badge of badgesList) {
      const media = await getMediaFromBadge(encodeURIComponent(badge))
      if (!media) failed += 1
      valueInSparks += media
    }

    console.log(
      `Valor final da conta do ${username}: ${valueInSparks.toFixed(
        3
      )} Sparks\nEle possui ${
        badgesList.length
      } emblemas, mas não foi possível calcular o valor de ${failed} emblemas.`
    )
  } catch (e) {
    console.log(
      `Erro ao obter valor final da conta ${username}.`,
      e.response.data
    )
  }
}

export default getAccValue
