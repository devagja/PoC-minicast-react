import { motion } from 'framer-motion'
import { memo } from 'react'

import { MOTION_VARIANTS } from '~/constants'

interface ContainerTransitionProps {
  children: React.ReactNode
  [x: string]: any
}
function _ContainerTransition({
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
}

const ContainerTransition = memo(_ContainerTransition)
export default ContainerTransition
