export interface AtomLink {
  href: string
  rel: string
  type: string
}

export interface Image {
  url: string
  title: string
  link: string
}

export interface ItunesCategory {
  text: string
}

export interface ItunesImage {
  href: string
}

export interface ItunesOwner {
  itunesName: string
  itunesEmail: string
}

export interface PodcastLocked {
  text: string
  owner: string
}

export interface Guid {
  text: string
  isPermaLink: string
}

export interface ItunesImage2 {
  href: string
}

export interface Enclosure {
  length: string
  type: string
  url: string
}

export interface MediaRestriction {
  text: string
  relationship: string
  type: string
}

export interface Item {
  title: string
  pubDate: string
  guid: Guid | string
  link: string
  itunesImage: ItunesImage2
  description: string
  contentEncoded: string
  enclosure: Enclosure
  itunesDuration: string | number
  itunesExplicit: boolean
  itunesKeywords: string
  itunesSubtitle: string
  itunesEpisodeType: string
  mediaRestriction: MediaRestriction
  itunesAuthor: string
}

export interface Channel {
  atomLink: AtomLink
  title: string
  pubDate: string
  lastBuildDate: string
  generator: string
  link: string
  language: string
  copyright: string
  docs: string
  managingEditor: string
  itunesSummary: string
  image: Image
  itunesAuthor: string
  itunesCategory: ItunesCategory
  itunesImage: ItunesImage
  itunesExplicit: boolean
  itunesOwner: ItunesOwner
  description: string
  itunesType: string
  itunesNewFeedUrl: string
  podcastLocked: PodcastLocked
  item: Item[]
}

export interface Rss {
  channel: Channel
}

export interface PodcastInfo {
  '?xml': string
  rss: Rss
}
