import { type HTMLMotionProps, motion } from 'framer-motion'
import { memo } from 'react'

import { MOTION_VARIANTS } from '~/constants'

interface ContainerTransitionProps extends HTMLMotionProps<'div'> {
  children: React.ReactNode
}

const ContainerTransition = memo(function _({
  children,
  ...props
}: ContainerTransitionProps): React.ReactElement {
  return (
    <motion.div
      {...props}
      custom={{ direction: 'forward' }}
      initial='initial'
      animate='in'
      exit='out'
      variants={MOTION_VARIANTS}
    >
      {children}
    </motion.div>
  )
})

export default ContainerTransition
