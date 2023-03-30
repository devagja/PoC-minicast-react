import axios from 'axios'
import { describe, test, expect, vi } from 'vitest'
import type { PodcastData } from '~/interfaces/Podcast'

import getPodcast from '~/services/itunes/getPodcast'
import podcastSingle from '~/mocks/podcast'

vi.mock('axios')

describe('getPodcast Service', () => {
  test('returns the result formatted', async () => {
    // @ts-expect-error
    axios.get.mockResolvedValue<PodcastData>({
      data: {
        contents:
          '\n\n\n{\n "resultCount":1,\n "results": [\n{"wrapperType":"track", "kind":"podcast", "collectionId":1645438817, "trackId":1645438817, "artistName":"Norah Jones", "collectionName":"Norah Jones Is Playing Along", "trackName":"Norah Jones Is Playing Along", "collectionCensoredName":"Norah Jones Is Playing Along", "trackCensoredName":"Norah Jones Is Playing Along", "collectionViewUrl":"https://podcasts.apple.com/us/podcast/norah-jones-is-playing-along/id1645438817?uo=4", "feedUrl":"https://feeds.megaphone.fm/norahjonesisplayingalong", "trackViewUrl":"https://podcasts.apple.com/us/podcast/norah-jones-is-playing-along/id1645438817?uo=4", "artworkUrl30":"https://is4-ssl.mzstatic.com/image/thumb/Podcasts122/v4/45/d1/b6/45d1b677-8f9c-ff35-8c04-897a4de8b162/mza_9278186528825138026.jpg/30x30bb.jpg", "artworkUrl60":"https://is4-ssl.mzstatic.com/image/thumb/Podcasts122/v4/45/d1/b6/45d1b677-8f9c-ff35-8c04-897a4de8b162/mza_9278186528825138026.jpg/60x60bb.jpg", "artworkUrl100":"https://is4-ssl.mzstatic.com/image/thumb/Podcasts122/v4/45/d1/b6/45d1b677-8f9c-ff35-8c04-897a4de8b162/mza_9278186528825138026.jpg/100x100bb.jpg", "collectionPrice":0.00, "trackPrice":0.00, "collectionHdPrice":0, "releaseDate":"2023-03-14T04:00:00Z", "collectionExplicitness":"notExplicit", "trackExplicitness":"cleaned", "trackCount":15, "trackTimeMillis":4241, "country":"USA", "currency":"USD", "primaryGenreName":"Music Interviews", "contentAdvisoryRating":"Clean", "artworkUrl600":"https://is4-ssl.mzstatic.com/image/thumb/Podcasts122/v4/45/d1/b6/45d1b677-8f9c-ff35-8c04-897a4de8b162/mza_9278186528825138026.jpg/600x600bb.jpg", "genreIds":["1525", "26", "1310"], "genres":["Music Interviews", "Podcasts", "Music"]}]\n}\n\n\n',
        status: {
          url: 'https://itunes.apple.com/lookup?id=1645438817',
          content_type: 'text/javascript; charset=utf-8',
          http_code: 200,
          response_time: 75,
          content_length: 608
        }
      }
    })

    const podList = await getPodcast('1645438817')

    expect(axios.get).toHaveBeenCalledWith(
      `${import.meta.env.VITE_ALLORIGINS_URL}/get?url=${
        import.meta.env.VITE_ITUNES_URL
      }/lookup?id=1645438817`
    )

    expect(podList).toHaveProperty('wrapperType', podcastSingle.wrapperType)
  })
})
