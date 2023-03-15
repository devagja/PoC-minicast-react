import { cleanup, render } from '@testing-library/react'
import { afterEach, describe, expect, test } from 'vitest'

import InfoCard from './InfoCard'

describe('InfoCard Component', () => {
  afterEach(cleanup)
  test('check all props works', () => {
    const { getByText, getByAltText } = render(
      <InfoCard
        image={{
          src: 'https://jose-aguilar.vercel.app/assets/images/perezozo.webp',
          alt: 'perezozo'
        }}
        title='title'
        author='imArtist'
      />
    )
    expect(getByAltText(/perezozo/i)).toBeDefined()
    expect(getByText(/title/i)).toBeDefined()
    expect(getByText(/imArtist/i)).toBeDefined()
  })
})
