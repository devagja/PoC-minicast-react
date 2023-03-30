import { test, expect } from '@playwright/test'

test('test', async ({ page }) => {
  await page.goto('http://localhost:5173/')

  await page.getByPlaceholder('Search...').click()
  await page.getByPlaceholder('Search...').fill('not found')
  expect(page.getByText('0')).toBeDefined()

  await page.getByRole('button').first().click()

  expect(
    page.getByRole('link', {
      name: 'This Little Light - Cadence13 and Parallel Author: Cadence13 and Parallel'
    })
  ).toBeDefined()

  await page.getByPlaceholder('Search...').click()
  await page.getByPlaceholder('Search...').fill('works')
  expect(page.getByText('0')).toBeDefined()

  expect(page.getByRole('button', { name: 'Clear Filter' })).toBeDefined()

  await page.getByRole('button', { name: 'Clear Filter' }).click()

  expect(
    page.getByRole('link', {
      name: 'This Little Light - Cadence13 and Parallel Author: Cadence13 and Parallel'
    })
  ).toBeDefined()
})
