import type { ReactElement } from 'react'

import Badge from '~/components/ui/atoms/Badge'
import SearchInput, {
  type SearchInputProps
} from '~/components/ui/atoms/SearchInput'

interface PodcastListHeaderProps {
  count: number
  input?: SearchInputProps
}

function PodcastListHeaderPage({
  count,
  input
}: PodcastListHeaderProps): ReactElement {
  return (
    <div className='sticky top-0 z-20 flex w-full items-center justify-center gap-4 px-2 pt-7 pb-8 backdrop-blur-md md:justify-end md:px-20'>
      <Badge>{count}</Badge>
      <SearchInput {...input} />
    </div>
  )
}

export default PodcastListHeaderPage
