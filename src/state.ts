import { atom } from 'jotai'

import type { InfoCardListDataProperties } from './utils/formatToUseInComponents/transformPodcastListToInfoCardListProps'

export const filteredPodcastListAtom = atom<InfoCardListDataProperties[] | []>(
  []
)
