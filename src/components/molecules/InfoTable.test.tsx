import { cleanup, fireEvent, render } from '@testing-library/react'
import { afterEach, describe, expect, test, vi } from 'vitest'

import InfoTable from './InfoTable'

describe('InfoTable Component', () => {
  afterEach(cleanup)
  test('check default render works', () => {
    const { container, getByText } = render(<InfoTable />)

    expect(getByText(/Date/i)).toBeDefined()
    expect(container.getElementsByClassName('loading')).toBeDefined()
  })

  test('check rows render works', () => {
    const { getByText } = render(
      <InfoTable
        rows={[
          {
            title: 'rowtitle',
            date: 'rowdate',
            duration: 'rowduration',
            guid: 'guid'
          }
        ]}
      />
    )

    expect(getByText(/rowtitle/i)).toBeDefined()
    expect(getByText(/rowdate/i)).toBeDefined()
    expect(getByText(/rowduration/i)).toBeDefined()
  })

  test('check default render works', () => {
    const mockHandler = vi.fn()
    const { getByText } = render(
      <InfoTable
        rows={[
          {
            title: 'rowtitle',
            date: 'date',
            duration: 'rowduration',
            guid: 'guid'
          }
        ]}
        onItemClick={mockHandler}
      />
    )
    fireEvent.click(
      getByText(/rowtitle/i),
      new MouseEvent('click', {
        bubbles: true,
        cancelable: true
      })
    )

    expect(mockHandler.mock.calls).toHaveLength(1)
  })
})
