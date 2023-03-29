import { cleanup, render } from '@testing-library/react'
import { afterEach, describe, expect, test } from 'vitest'

import Table from './Table'

describe('Table Component', () => {
  afterEach(cleanup)

  test('check default render works', () => {
    const { getByText } = render(<Table headers={['test']}>children</Table>)

    expect(getByText(/test/i)).toBeDefined()
    expect(getByText(/children/i)).toBeDefined()
  })
})
