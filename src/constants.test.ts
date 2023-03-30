import { describe, expect, test } from 'vitest'
import { MOTION_VARIANTS } from './constants'

describe('InfoCard Component', () => {
  test('check initial options works', () => {
    expect(MOTION_VARIANTS.initial({ direction: 'forward' })).toHaveProperty(
      'x',
      '100%'
    )
    expect(MOTION_VARIANTS.initial({ direction: 'backward' })).toHaveProperty(
      'x',
      '-100%'
    )
  })
  test('check out options works', () => {
    expect(MOTION_VARIANTS.out({ direction: 'forward' })).toHaveProperty(
      'x',
      '-100%'
    )
    expect(MOTION_VARIANTS.out({ direction: 'backward' })).toHaveProperty(
      'x',
      '100%'
    )
  })
})
