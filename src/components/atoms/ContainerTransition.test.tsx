import { cleanup, render } from '@testing-library/react'
import { afterEach, describe, expect, test } from 'vitest'

import ContainerTransition from './ContainerTransition'

describe('ContainerTransition Component', () => {
  afterEach(cleanup)

  test('check children string works', () => {
    const { getByText } = render(
      <ContainerTransition>children</ContainerTransition>
    )
    expect(getByText(/children/i)).toBeDefined()
  })

  test('check children reactElement works', () => {
    const { getByText } = render(
      <ContainerTransition>
        <p>children</p>
      </ContainerTransition>
    )
    expect(getByText(/children/i)).toBeDefined()
  })
  test('check classname prop works', () => {
    const { container } = render(
      <ContainerTransition className='text-xl'>
        <p>children</p>
      </ContainerTransition>
    )

    // @ts-expect-error
    expect(container.firstChild.classList.value.match(/text-xl/i)).toBeTruthy()
  })
})
