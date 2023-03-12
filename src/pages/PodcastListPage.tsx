import { useAtom } from 'jotai'
import { type ReactElement, useEffect } from 'react'
import { useForm } from 'react-hook-form'

import PodcastListHeaderPage from '~/components/navigation/atom/PodcastListHeaderPage'
import InfoCardList from '~/components/navigation/molecules/InfoCardList'
import usePodcastList from '~/hooks/query/usePodcastList'
import { filteredPodcastListAtom } from '~/state'

function PodcastListPage(): ReactElement {
  const { data: podcastList } = usePodcastList()

  const [filteredPodcastList, setFilteredPodcastList] = useAtom(
    filteredPodcastListAtom
  )

  const { register, watch, setValue } = useForm({
    defaultValues: {
      search: ''
    }
  })

  const watchSearch = watch('search')

  useEffect(() => {
    if (podcastList != null) {
      setFilteredPodcastList(podcastList)
    }
  }, [podcastList])

  useEffect(() => {
    if (podcastList != null) {
      if (watchSearch.trim() !== '') {
        setFilteredPodcastList(
          podcastList.filter(pod => {
            const regx = new RegExp(watchSearch.trim(), 'i')
            return (
              regx.test(pod.id) || regx.test(pod.title) || regx.test(pod.author)
            )
          })
        )
      } else {
        setFilteredPodcastList(podcastList)
      }
    }
  }, [watchSearch])

  const handleReset = (): void => {
    setValue('search', '')
  }

  return (
    <div className='container w-full flex flex-col mx-auto pb-7'>
      <PodcastListHeaderPage
        count={filteredPodcastList.length}
        input={{
          ...register('search'),
          placeholder: 'Search...',
          onReset: handleReset
        }}
      />
      <InfoCardList data={filteredPodcastList} />

      {filteredPodcastList.length === 0 && (
        <div className='hero py-10'>
          <div className='hero-content text-center'>
            <div className='max-w-md'>
              <h1 className='text-5xl font-bold'>Empty search</h1>
              <p className='py-6'>You should consider cleaning the filter</p>
              <button onClick={handleReset} className='btn btn-primary'>
                Clear Filter
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default PodcastListPage
