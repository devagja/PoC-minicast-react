import { cleanup, fireEvent, render } from '@testing-library/react'
import { Router } from 'react-router-dom'
import { afterEach, describe, expect, test, vi } from 'vitest'
import { createMemoryHistory } from 'history'

import DetailsCard from './DetailsCard'

describe('DetailsCard Component', () => {
  afterEach(cleanup)
  test('check default render works', () => {
    const { getByText, getByAltText } = render(
      <DetailsCard
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

  test('check link title react router render works', () => {
    const history = createMemoryHistory()
    history.push = vi.fn()

    const { getByText } = render(
      <Router location={history.location} navigator={history}>
        <DetailsCard
          image={{
            src: 'https://jose-aguilar.vercel.app/assets/images/perezozo.webp',
            alt: 'perezozo'
          }}
          title='title'
          author='imArtist'
          link={{ to: '/podcast/0' }}
        />
      </Router>
    )

    fireEvent.click(getByText(/title/i))

    expect(history.push).toHaveBeenCalledWith(
      {
        hash: '',
        pathname: '/podcast/0',
        search: ''
      },
      undefined,
      {
        preventScrollReset: undefined,
        relative: undefined,
        replace: false,
        state: undefined
      }
    )
  })
  test('check link image react router render works', () => {
    const history = createMemoryHistory()
    history.push = vi.fn()

    const { getByAltText } = render(
      <Router location={history.location} navigator={history}>
        <DetailsCard
          image={{
            src: 'https://jose-aguilar.vercel.app/assets/images/perezozo.webp',
            alt: 'perezozo'
          }}
          title='title'
          author='imArtist'
          link={{ to: '/podcast/0' }}
        />
      </Router>
    )

    fireEvent.click(getByAltText(/perezozo/i))

    expect(history.push).toHaveBeenCalledWith(
      {
        hash: '',
        pathname: '/podcast/0',
        search: ''
      },
      undefined,
      {
        preventScrollReset: undefined,
        relative: undefined,
        replace: false,
        state: undefined
      }
    )
  })

  test('check loader render works', () => {
    const { container } = render(
      <DetailsCard
        image={{
          src: 'https://jose-aguilar.vercel.app/assets/images/perezozo.webp',
          alt: 'perezozo'
        }}
        title='title'
        author='imArtist'
        isLoading
      />
    )

    expect(container.getElementsByClassName('loading').length).toBe(1)
  })

  test('check child render works', () => {
    const { getByText } = render(
      <DetailsCard
        image={{
          src: 'https://jose-aguilar.vercel.app/assets/images/perezozo.webp',
          alt: 'perezozo'
        }}
        title='title'
        author='imArtist'
      >
        test
      </DetailsCard>
    )
    expect(getByText(/test/i)).toBeDefined()
  })

  test('check dangerHTML injects works', () => {
    const { getByText, container } = render(
      <DetailsCard
        image={{
          src: 'https://jose-aguilar.vercel.app/assets/images/perezozo.webp',
          alt: 'perezozo'
        }}
        title='title'
        author='imArtist'
        isChildDangerousHTML
      >
        {'<p class="test-class">test</p>'}
      </DetailsCard>
    )
    expect(container.getElementsByClassName('test-class').length).toBe(1)
    expect(getByText(/test/i)).toBeDefined()
  })
})
