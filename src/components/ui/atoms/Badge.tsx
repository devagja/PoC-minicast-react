import { memo, useMemo } from 'react'

interface BadgeProps {
  children: React.ReactNode
  className?: string
  [x: string]: any
}

function Badge({
  children,
  className = '',
  ...props
}: BadgeProps): React.ReactElement {
  const classesMemo = useMemo(
    () =>
      [
        className,
        'badge badge-lg badge-primary rounded-lg text-xl px-2 py-1 font-bold'
      ].join(' '),
    [className]
  )

  return (
    <div {...props} className={classesMemo}>
      {children}
    </div>
  )
}

export default memo(Badge)
