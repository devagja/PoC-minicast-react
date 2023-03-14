import loadable from '@loadable/component'
import { createBrowserRouter } from 'react-router-dom'

import loaderPodcast from '~/loaders/loaderPodcast'
import loaderPodcastList from '~/loaders/loaderPodcastList'
import queryClient from '~/queryClient'

const LoadableRedirect = loadable(
  async () => await import('~/components/routing/atoms/Redirect')
)
const LoadableLayout = loadable(async () => await import('~/pages/Layout'))

const LoadablePodcastListPage = loadable(
  async () => await import('~/pages/PodcastListPage')
)

const LoadablePodcastPage = loadable(
  async () => await import('~/pages/PodcastPage')
)

const LoadablePodcastEpisodePage = loadable(
  async () => await import('~/pages/PodcastEpisodePage')
)

const LoadableDetailsLayout = loadable(
  async () => await import('~/pages/DetailsLayout')
)

const router = createBrowserRouter([
  {
    path: '/',
    element: <LoadableLayout />,
    errorElement: <LoadableRedirect />,
    children: [
      {
        path: '/',
        index: true,
        element: <LoadablePodcastListPage />,
        loader: loaderPodcastList(queryClient)
      },
      {
        element: <LoadableDetailsLayout />,
        loader: loaderPodcast(queryClient),
        children: [
          {
            path: 'podcast/:podcastId',
            element: <LoadablePodcastPage />
          },
          {
            path: 'podcast/:podcastId/episode/:episodeId',
            element: <LoadablePodcastEpisodePage />
          }
        ]
      }
    ]
  }
])

export default router
