import { cleanup, render } from '@testing-library/react'
import { afterEach, describe, expect, test } from 'vitest'

import Status from './Status'

describe('Status Component', () => {
  afterEach(cleanup)

  test('check default render works', () => {
    const { container } = render(<Status state='loading' />)

    expect(container.getElementsByClassName('loading').length).toBe(1)
  })
  test('check default render works', () => {
    const { container } = render(<Status state='idle' />)

    expect(container.getElementsByClassName('loading').length).toBe(0)
  })
})
