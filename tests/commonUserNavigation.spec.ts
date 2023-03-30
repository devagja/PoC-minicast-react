import { test, expect } from '@playwright/test'

test('test', async ({ page }) => {
  await page.goto('http://localhost:5173/')
  await page
    .getByRole('link', {
      name: 'This Little Light - Cadence13 and Parallel Author: Cadence13 and Parallel'
    })
    .click()
  expect(page.getByRole('img', { name: 'This Little Light' })).toBeDefined()

  await page.getByRole('cell', { name: 'Finneas' }).click()
  expect(
    page.getByRole('link', {
      name: 'Back to Podcast This Little Light',
      exact: true
    })
  ).toBeDefined()
  await page
    .getByRole('link', {
      name: 'Back to Podcast This Little Light',
      exact: true
    })
    .click()

  expect(page.getByRole('cell', { name: 'Rick Rubin' })).toBeDefined()
  await page.getByRole('cell', { name: 'Rick Rubin' }).click()
  expect(
    page.getByRole('link', {
      name: 'Back to Podcast This Little Light',
      exact: true
    })
  ).toBeDefined()

  await page.getByRole('link', { name: 'MiniCast' }).click()
  expect(
    page.getByRole('link', {
      name: 'This Little Light - Cadence13 and Parallel Author: Cadence13 and Parallel'
    })
  ).toBeDefined()
})
