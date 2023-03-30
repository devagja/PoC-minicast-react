import { cleanup, render } from '@testing-library/react'
import { afterEach, describe, expect, test } from 'vitest'

import PodcastListHeaderPage from './PodcastListHeaderPage'

describe('PodcastListHeaderPage Component', () => {
  afterEach(cleanup)
  test('check all props works', () => {
    const { getByText } = render(<PodcastListHeaderPage count={100} />)
    expect(getByText(/100/i)).toBeDefined()
  })
})
