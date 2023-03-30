import loadable from '@loadable/component'
import { useAtom } from 'jotai'
import { useEffect, useMemo, useCallback, memo } from 'react'

import ContainerTransition from '~/components/atoms/ContainerTransition'
import PodcastListHeaderPage from '~/components/molecules/PodcastListHeaderPage'
import InfoCardList from '~/components/organisms/InfoCardList'
import usePodcastList from '~/hooks/query/usePodcastList'
import useSearchForm from '~/hooks/rhf/useSearchForm'
import { filteredPodcastListAtom } from '~/state'
import getListFilteredByValue from '~/utils/formatToUseInComponents/getListFilteredByValue'

const PodcastListPage = memo(function _(): React.ReactElement {
  const { data: podcastList } = usePodcastList()

  const [filteredPodcastList, setFilteredPodcastList] = useAtom(
    filteredPodcastListAtom
  )

  const { register, watch, setValue } = useSearchForm()

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
    setValue('search', '')
  }, [setValue])

  const PodcastListHeaderPageMemo = useMemo(
    () => (
      <PodcastListHeaderPage
        count={filteredPodcastList.length}
        input={{
          role: 'search',
          'aria-label': 'podcast filter input',
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

  const EmptyHeroMemo = useMemo(() => {
    const LoadableEmptyHero = loadable(
      async () => await import('~/components/molecules/Hero')
    )
    return (
      <LoadableEmptyHero
        title='Empty search'
        description='You should consider cleaning the filter'
        button={{
          onClick: handleReset,
          label: 'Clear Filter'
        }}
      />
    )
  }, [handleReset])

  const ShowHeroMemo = useMemo(() => {
    return filteredPodcastList.length === 0 ? EmptyHeroMemo : <></>
  }, [EmptyHeroMemo, filteredPodcastList])

  return (
    <ContainerTransition className='container mx-auto flex w-full flex-col pb-7'>
      {PodcastListHeaderPageMemo}
      {InfoCardListMemo}
      {ShowHeroMemo}
    </ContainerTransition>
  )
})

export default PodcastListPage
