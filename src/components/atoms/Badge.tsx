import { memo, useMemo } from 'react'

interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  className?: string
}

const Badge = memo(function _({
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
})

export default Badge
