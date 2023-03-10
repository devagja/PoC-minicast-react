import axios from 'axios'

import { type Entry, type PodcastList } from '~/interfaces/PodcastList'
import keysToCamel from '~/utils/format/keysToCamel'

export default async function getPodcastList (): Promise<Entry[]> {
  const res = (
    await axios.get<PodcastList>(
      `${
        import.meta.env.VITE_ITUNES_URL
      }/us/rss/toppodcasts/limit=100/genre=1310/json`
    )
  ).data

  // @ts-expect-error
  return keysToCamel(res.feed.entry)
}
