import { cleanup, render } from '@testing-library/react'
import { afterEach, describe, expect, test } from 'vitest'

import Badge from './Badge'

describe('Badge Component', () => {
  afterEach(cleanup)

  test('check children string works', () => {
    const { getByText } = render(<Badge>children</Badge>)
    expect(getByText(/children/i)).toBeDefined()
  })

  test('check children reactElement works', () => {
    const { getByText } = render(
      <Badge>
        <p>children</p>
      </Badge>
    )
    expect(getByText(/children/i)).toBeDefined()
  })
  test('check classname prop works', () => {
    const { container } = render(
      <Badge className='text-xl'>
        <p>children</p>
      </Badge>
    )

    // @ts-expect-error
    expect(container.firstChild.classList.value.match(/text-xl/i)).toBeTruthy()
    // @ts-expect-error
    expect(container.firstChild.classList.value.match(/badge/i)).toBeTruthy()
  })

  test('check new prop works', () => {
    const { getByTestId } = render(
      <Badge data-testid='ss' className='text-xl'>
        <p>children</p>
      </Badge>
    )

    expect(getByTestId('ss')).toBeDefined()
  })
})
