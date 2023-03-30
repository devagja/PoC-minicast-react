import axios from 'axios'
import { describe, test, expect, vi } from 'vitest'
import type { PodcastData } from '~/interfaces/Podcast'

import getPodcastInfo from '~/services/itunes/getPodcastInfo'

vi.mock('axios')

describe('getPodcastInfo Service', () => {
  test('returns the result formatted', async () => {
    const xmlDataStr = `<rss><channel><a>wow</a></channel></rss>`

    // @ts-expect-error
    axios.get.mockResolvedValue<PodcastData>({ data: xmlDataStr })

    const podList = await getPodcastInfo(
      'https://feeds.megaphone.fm/norahjonesisplayingalong'
    )

    expect(axios.get).toHaveBeenCalledWith(
      'https://feeds.megaphone.fm/norahjonesisplayingalong'
    )

    expect(podList).toHaveProperty('a', 'wow')
  })
})
