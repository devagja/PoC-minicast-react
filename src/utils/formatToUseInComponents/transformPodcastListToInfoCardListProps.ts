import type { ImgHTMLAttributes } from 'react'

import type { Entry } from '~/interfaces/PodcastList'

export interface InfoCardListDataProperties {
  id: string
  image: ImgHTMLAttributes<HTMLImageElement>
  title: string
  author: string
}

function transformPodcastListToInfoCardListProps(
  podcastList: Entry[]
): InfoCardListDataProperties[] {
  return podcastList.map(({ id, title, imArtist, imImage, imName }) => ({
    id: id.attributes.imId,
    image: {
      src: imImage[2].label,
      alt: imName.label
    },
    title: title.label,
    author: imArtist.label
  }))
}

export default transformPodcastListToInfoCardListProps
