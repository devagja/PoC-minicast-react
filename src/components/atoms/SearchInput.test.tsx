import { cleanup, fireEvent, render } from '@testing-library/react'
import { afterEach, describe, expect, test, vi } from 'vitest'

import SearchInput from './SearchInput'

describe('SearchInput Component', () => {
  afterEach(cleanup)

  test('check render works', () => {
    const { getByRole, container } = render(
      <SearchInput
        role='search'
        aria-label='input'
        defaultValue='test'
        type='text'
      />
    )

    expect(getByRole('search', { name: 'input' })).toHaveProperty(
      'value',
      'test'
    )

    expect(container.getElementsByClassName('btn-primary').length).toBe(1)
  })

  test('check onReset prop works', () => {
    const mockHandler = vi.fn()
    const { getByRole, container } = render(
      <SearchInput
        role='search'
        aria-label='input'
        defaultValue='test'
        type='text'
        onReset={mockHandler}
      />
    )

    fireEvent(
      container.getElementsByClassName('btn-primary')[0],
      new MouseEvent('click', {
        bubbles: true,
        cancelable: true
      })
    )

    expect(getByRole('search', { name: 'input' })).toHaveProperty(
      'value',
      'test'
    )

    expect(mockHandler.mock.calls).toHaveLength(1)
  })
})
