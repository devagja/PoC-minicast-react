import type { InfoCardListDataProperties } from './transformPodcastListToInfoCardListProps'

const getListFilteredByValue = (
  arr: InfoCardListDataProperties[],
  value: string
): InfoCardListDataProperties[] =>
  arr.filter(pod => {
    const regx = new RegExp(value, 'i')
    return regx.test(pod.id) || regx.test(pod.title) || regx.test(pod.author)
  })

export default getListFilteredByValue
