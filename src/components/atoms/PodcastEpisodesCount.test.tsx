import { cleanup, render } from '@testing-library/react'
import { afterEach, describe, expect, test } from 'vitest'

import PodcastEpisodesCount from './PodcastEpisodesCount'

describe('PodcastEpisodesCount Component', () => {
  afterEach(cleanup)

  test('check count loading state works', () => {
    const { container } = render(<PodcastEpisodesCount count={-1} />)

    const loader = container.getElementsByClassName('loading')

    expect(loader.length).toBe(1)
  })

  test('check render count number works', () => {
    const { getByText } = render(<PodcastEpisodesCount count={2} />)

    expect(getByText(/Episodes: 2/i)).toBeTruthy()
  })

  test('check classname prop works', () => {
    const { container } = render(
      <PodcastEpisodesCount count={-1} className='text-xl' />
    )

    // @ts-expect-error
    expect(container.firstChild.classList.value.match(/text-xl/i)).toBeTruthy()
    expect(
      // @ts-expect-error
      container.firstChild.classList.value.match(/border-base-200/i)
    ).toBeTruthy()
  })
})
