import axios from 'axios'

import { type Entry, type PodcastList } from '~/interfaces/PodcastList'
import keysToCamel from '~/utils/format/keysToCamel'
import transformPodcastListToInfoCardListProps, {
  type InfoCardListDataProperties
} from '~/utils/formatToUseInComponents/transformPodcastListToInfoCardListProps'

export default async function getPodcastList(): Promise<Entry[]> {
  const res = (
    await axios.get<PodcastList>(
      `${
        import.meta.env.VITE_ITUNES_URL
      }/us/rss/toppodcasts/limit=100/genre=1310/json`
    )
  ).data

  return keysToCamel(res.feed.entry)
}

export const getTrimmedPodcastList = async (): Promise<
  InfoCardListDataProperties[]
> => {
  const data = await getPodcastList()
  return transformPodcastListToInfoCardListProps(data)
}
