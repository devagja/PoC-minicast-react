import { test, expect } from '@playwright/test'

test('test', async ({ page }) => {
  await page.goto('http://localhost:5173/test')
  expect(page.getByPlaceholder('Search...')).toBeDefined()

  await page.goto('http://localhost:5173/podcast/167837823944')
  expect(page.getByPlaceholder('Search...')).toBeDefined()

  await page.goto(
    'http://localhost:5173/podcast/1678378239/episode/1726d660-ca86-11ed-bc57-df468bf305c733'
  )
  expect(page.getByRole('button', { name: 'Back to Podcast' })).toBeDefined()
  await page.getByRole('button', { name: 'Back to Podcast' }).click()
})
