import loadable from '@loadable/component'
import { createBrowserRouter } from 'react-router-dom'

import loaderPodcastList from '~/loaders/loaderPodcastList'
import queryClient from '~/queryClient'

const LoadableRedirect = loadable(
  async () => await import('~/components/routing/atoms/Redirect')
)
const LoadableLayout = loadable(async () => await import('~/pages/Layout'))
const LoadablePodcastListPage = loadable(
  async () => await import('~/pages/PodcastListPage')
)

const router = createBrowserRouter([
  {
    path: '/',
    element: <LoadableLayout />,
    errorElement: <LoadableRedirect />,
    children: [
      {
        index: true,
        element: <LoadablePodcastListPage />,
        loader: loaderPodcastList(queryClient)
      }
    ]
  }
])

export default router
