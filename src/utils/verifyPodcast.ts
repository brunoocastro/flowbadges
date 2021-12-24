const podcastNames = {
  ac7TKXX0pZ928KiXFzrL: 'kritike',
  mL0SV0pP2YtOeXxjWe2P: 'venus',
  AOncvOxcxNdbLe0IpMxn: 'aderiva',
  XzHIWZr50PSQJ6i47kVd: 'flowsportclub',
  Wr8kAod7FUvG4vF8Z1es: 'prosaguiada',
  yLTB8ibDV92MmwQMNHQD: 'cienciasemfim'
}

const verifyPodcast = (link: string): string => {
  const podcastCode = link.match(/(criador\/[A-Z])\w+/gi)

  console.log('Code', link, podcastCode)
  if (podcastCode) {
    const podcastId = podcastCode[0]?.slice(8)
    if (podcastId) return podcastNames[podcastId]
  }
  return ''
}

export default verifyPodcast
