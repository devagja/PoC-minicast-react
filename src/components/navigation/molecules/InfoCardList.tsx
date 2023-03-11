import type { ReactElement } from 'react'
import { Link } from 'react-router-dom'

import InfoCard from '~/components/ui/molecules/InfoCard'
import type { InfoCardListDataProperties } from '~/utils/formatToUseInComponents/transformPodcastListToInfoCardListProps'

interface InfoCardListProps {
  data: InfoCardListDataProperties[]
}

function InfoCardList({ data }: InfoCardListProps): ReactElement {
  return (
    <div className='flex flex-wrap justify-center gap-x-3 gap-y-28 mx-auto container px-2'>
      {data.map(({ id, image, title, author }: InfoCardListDataProperties) => (
        <Link to={`podcast/${id}`} key={id}>
          <InfoCard image={image} author={author} title={title} />
        </Link>
      ))}
    </div>
  )
}

export default InfoCardList
