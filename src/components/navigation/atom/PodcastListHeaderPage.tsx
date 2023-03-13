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
    <div className='w-full flex justify-center sticky top-0 pt-7 pb-8 backdrop-blur-md px-2 z-20 md:justify-end gap-4 items-center md:px-20'>
      <Badge>{count}</Badge>
      <SearchInput {...input} />
    </div>
  )
}

export default PodcastListHeaderPage
