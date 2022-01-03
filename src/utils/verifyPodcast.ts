const podcastNames = {
  ac7TKXX0pZ928KiXFzrL: 'Kritike',
  mL0SV0pP2YtOeXxjWe2P: 'Venus Podcast',
  AOncvOxcxNdbLe0IpMxn: 'A Deriva',
  XzHIWZr50PSQJ6i47kVd: 'Flow Sport Club',
  Wr8kAod7FUvG4vF8Z1es: 'Prosa Guiada',
  yLTB8ibDV92MmwQMNHQD: 'Ciência Sem Fim'
}

const verifyPodcast = (link: string): string => {
  const podcastCode = link.match(/(criador\/[A-Z])\w+/gi)

  if (podcastCode) {
    const podcastId = podcastCode[0]?.slice(8)
    if (podcastId) return podcastNames[podcastId]
  }
  return ''
}

export default verifyPodcast
