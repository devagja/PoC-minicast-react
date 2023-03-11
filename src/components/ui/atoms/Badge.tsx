import type { ReactElement, ReactNode } from 'react'

interface BadgeProps {
  children: ReactNode
  className?: string
  [x: string]: any
}

function Badge({
  children,
  className = '',
  ...props
}: BadgeProps): ReactElement {
  const classes = [
    className,
    'badge badge-lg badge-primary rounded-lg text-xl px-2 py-1 font-bold'
  ].join(' ')
  return (
    <div {...props} className={classes}>
      {children}
    </div>
  )
}

export default Badge
