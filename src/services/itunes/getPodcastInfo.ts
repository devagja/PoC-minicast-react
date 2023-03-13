import axios from 'axios'
import { XMLParser } from 'fast-xml-parser'

import type { PodcastInfo } from '~/interfaces/PodcastInfo'
import keysToCamel from '~/utils/format/keysToCamel'

export default async function getPodcastInfo(feedUrl: string): Promise<any> {
  const res = (await axios.get<any>(encodeURI(feedUrl))).data

  const parser = new XMLParser({ ignoreAttributes: false })

  const data: PodcastInfo = parser.parse(res)

  return keysToCamel(data.rss.channel)
}
