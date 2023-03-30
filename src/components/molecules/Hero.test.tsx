import { cleanup, fireEvent, render } from '@testing-library/react'
import { createMemoryHistory } from 'history'
import { Router } from 'react-router-dom'
import { afterEach, describe, expect, test, vi } from 'vitest'

import Hero from './Hero'

// title: string
// description: string
// button: ButtonProperties
// link?: (LinkProps & React.RefAttributes<HTMLAnchorElement>) | null

describe('Hero Component', () => {
  afterEach(cleanup)
  test('check all props works', () => {
    const { getByText, getByAltText } = render(
      <Hero
        title='title'
        description='description'
        button={{ label: 'button' }}
      />
    )
    expect(getByText(/title/i)).toBeDefined()
    expect(getByText(/description/i)).toBeDefined()
    expect(getByText(/button/i)).toBeDefined()
  })

  test('check all props works', () => {
    const history = createMemoryHistory()
    history.push = vi.fn()

    const { getByText } = render(
      <Router location={history.location} navigator={history}>
        <Hero
          title='title'
          description='description'
          button={{ label: 'button' }}
          link={{ to: '/home' }}
        />
      </Router>
    )

    fireEvent.click(getByText(/button/i))

    expect(history.push).toHaveBeenCalledWith(
      {
        hash: '',
        pathname: '/home',
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
})
