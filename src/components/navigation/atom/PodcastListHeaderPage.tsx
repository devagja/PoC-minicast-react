import { useMemo } from 'react'

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
}: PodcastListHeaderProps): React.ReactElement {
  const CountMemo = useMemo(() => <Badge>{count}</Badge>, [count])
  const SearchInputMemo = useMemo(() => <SearchInput {...input} />, [input])

  return (
    <div className='sticky top-0 z-20 flex w-full items-center justify-center gap-4 px-2 pt-7 pb-8 backdrop-blur-md md:justify-end md:px-20'>
      {CountMemo}
      {SearchInputMemo}
    </div>
  )
}

export default PodcastListHeaderPage
