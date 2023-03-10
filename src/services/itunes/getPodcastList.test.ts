import axios from 'axios'
import { describe, test, expect, vi } from 'vitest'

import { type PodcastList } from '~/interfaces/PodcastList'
import podcastList, { formattedPodcastList } from '~/mocks/podcastList'
import getPodcastList from '~/services/itunes/getPodcastList'

vi.mock('axios')

describe('getPodcastList Service', () => {
  test('makes a GET request to fetch podcast list and returns the result formatted', async () => {
    // @ts-expect-error
    axios.get.mockResolvedValue<PodcastList>({
      data: podcastList
    })

    const podList = await getPodcastList()

    expect(axios.get).toHaveBeenCalledWith(
      `${
        import.meta.env.VITE_ITUNES_URL
      }/us/rss/toppodcasts/limit=100/genre=1310/json`
    )

    expect(podList).toStrictEqual(formattedPodcastList)
  })
})
