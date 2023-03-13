import { useAtom } from 'jotai'
import { type ReactElement, useEffect, useMemo, useCallback } from 'react'
import { useForm } from 'react-hook-form'

import EmptyHero from '~/components/EmptyHero'
import PodcastListHeaderPage from '~/components/navigation/atom/PodcastListHeaderPage'
import InfoCardList from '~/components/navigation/molecules/InfoCardList'
import ContainerTransition from '~/components/routing/atoms/ContainerTransition'
import usePodcastList from '~/hooks/query/usePodcastList'
import { filteredPodcastListAtom } from '~/state'
import getListFilteredByValue from '~/utils/formatToUseInComponents/getListFilteredByValue'

function PodcastListPage(): ReactElement {
  const { data: podcastList } = usePodcastList()

  const [filteredPodcastList, setFilteredPodcastList] = useAtom(
    filteredPodcastListAtom
  )

  const { register, watch, setValue, getValues } = useForm({
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
      const watchSearchTrimmed = watchSearch.trim()
      if (watchSearchTrimmed !== '') {
        const filtered = getListFilteredByValue(podcastList, watchSearchTrimmed)

        if (filteredPodcastList.toString() !== filtered.toString()) {
          setFilteredPodcastList(filtered)
        }
      } else {
        setFilteredPodcastList(podcastList)
      }
    }
  }, [watchSearch])

  const handleReset = useCallback((): void => {
    if (getValues().search !== '') {
      setValue('search', '')
    }
  }, [setValue])

  const PodcastListHeaderPageMemo = useMemo(
    () => (
      <PodcastListHeaderPage
        count={filteredPodcastList.length}
        input={{
          ...register('search'),
          placeholder: 'Search...',
          onReset: handleReset
        }}
      />
    ),
    [register, handleReset, filteredPodcastList]
  )

  const InfoCardListMemo = useMemo(
    () => <InfoCardList data={filteredPodcastList} />,
    [filteredPodcastList]
  )

  const EmptyHeroMemo = useMemo(
    () =>
      filteredPodcastList.length === 0 && (
        <EmptyHero
          title='Empty search'
          description='You should consider cleaning the filter'
          button={{
            onClick: handleReset,
            label: 'Clear Filter'
          }}
        />
      ),
    [filteredPodcastList, handleReset]
  )

  return (
    <ContainerTransition className='container mx-auto flex w-full flex-col pb-7'>
      {PodcastListHeaderPageMemo}
      {InfoCardListMemo}
      {EmptyHeroMemo}
    </ContainerTransition>
  )
}

export default PodcastListPage
