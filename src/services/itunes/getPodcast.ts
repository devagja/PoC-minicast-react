import axios from 'axios'

import type { Podcast, PodcastData } from '~/interfaces/Podcast'

interface AlloriginResponse {
  contents: string
}
export default async function getPodcast(id: string): Promise<PodcastData> {
  const res = (
    await axios.get<AlloriginResponse>(
      `${import.meta.env.VITE_ALLORIGINS_URL}/get?url=${
        import.meta.env.VITE_ITUNES_URL
      }/lookup?id=${id}`
    )
  ).data.contents

  const data: Podcast = JSON.parse(res)

  return data.results[0]
}
