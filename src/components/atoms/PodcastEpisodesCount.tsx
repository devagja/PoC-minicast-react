import { memo, useMemo } from 'react'

interface PodcastEpisodesCountProps
  extends React.HTMLAttributes<HTMLDivElement> {
  count: number
}

const PodcastEpisodesCount = memo(function _({
  count,
  className,
  ...props
}: PodcastEpisodesCountProps): React.ReactElement {
  //TODO: make component
  const loader = useMemo(
    () => <span className='loading btn-ghost btn-sm btn transition-all'></span>,
    []
  )

  const classes = useMemo(
    () =>
      [
        'w-full border border-base-200 bg-base-100 px-4 py-3 drop-shadow-lg',
        className
      ].join(' '),
    [className]
  )

  return (
    <div {...props} className={classes}>
      <span className='text-xl font-bold'>
        <>Episodes: {count !== -1 ? count : loader}</>
      </span>
    </div>
  )
})

export default PodcastEpisodesCount
