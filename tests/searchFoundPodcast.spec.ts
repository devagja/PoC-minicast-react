import { test, expect } from '@playwright/test'

test('test', async ({ page }) => {
  await page.goto('http://localhost:5173/')
  await page.getByPlaceholder('Search...').click()
  await page.getByPlaceholder('Search...').fill('mill')

  expect(page.getByText('1')).toBeDefined()
  expect(
    page.getByRole('link', {
      name: 'Million Dollaz Worth Of Game - Barstool Sports Author: Barstool Sports'
    })
  ).toBeDefined()

  await page
    .getByRole('link', {
      name: 'Million Dollaz Worth Of Game - Barstool Sports Author: Barstool Sports'
    })
    .click()
})
