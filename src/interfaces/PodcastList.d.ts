export interface Name {
  label: string
}

export interface Uri {
  label: string
}

export interface Author {
  name: Name
  uri: Uri
}

export interface ImName {
  label: string
}

export interface ImImageAttributes {
  height: string
}

export interface ImImage {
  label: string
  attributes: ImImageAttributes
}

export interface Summary {
  label: string
}

export interface ImPriceAttributes {
  amount: string
  currency: string
}

export interface ImPrice {
  label: string
  attributes: ImPriceAttributes
}

export interface ImContentTypeAttributes {
  term: string
  label: string
}

export interface ImContentType {
  attributes: ImContentTypeAttributes
}

export interface Rights {
  label: string
}

export interface Title {
  label: string
}

export interface LinkAttributes {
  rel: string
  type: string
  href: string
}

export interface Link {
  attributes: LinkAttributes
}

export interface IdAttributes {
  imId: string
}

export interface Id {
  label: string
  attributes: IdAttributes
}

export interface ImArtistAttributes {
  href: string
}

export interface ImArtist {
  label: string
  attributes: ImArtistAttributes
}

export interface CategoryAttributes {
  imId: string
  term: string
  scheme: string
  label: string
}

export interface Category {
  attributes: CategoryAttributes
}

export interface ImReleaseDateAttributes {
  label: string
}

export interface ImReleaseDate {
  label: Date
  attributes: ImReleaseDateAttributes
}

export interface Entry {
  imName: ImName
  imImage: ImImage[]
  summary: Summary
  imPrice: ImPrice
  imContentType: ImContentType
  rights: Rights
  title: Title
  link: Link
  id: Id
  imArtist: ImArtist
  category: Category
  imReleaseDate: ImReleaseDate
}

export interface Updated {
  label: Date
}

export interface Icon {
  label: string
}

export interface FeedId {
  label: string
}

export interface Feed {
  author: Author
  entry: Entry[]
  updated: Updated
  rights: Rights
  title: Title
  icon: Icon
  link: Link[]
  id: FeedId
}

export interface PodcastList {
  feed: Feed
}
