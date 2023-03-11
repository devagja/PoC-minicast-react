import { describe, test, expect } from 'vitest'

import isArray from './isArray'

describe('isArray util', () => {
  test('check an array', () => {
    expect(isArray([])).toBe(true)
  })
  test('check an empty object', () => {
    expect(isArray({})).toBe(false)
  })
  test('check an string', () => {
    expect(isArray('string')).toBe(false)
  })
  test('check an number', () => {
    expect(isArray(555)).toBe(false)
  })
  test('check an Date', () => {
    expect(isArray(new Date())).toBe(false)
  })
  test('check an null value', () => {
    expect(isArray(null)).toBe(false)
  })
  test('check an undefined', () => {
    expect(isArray(undefined)).toBe(false)
  })
  test('check an function', () => {
    expect(isArray(function () {})).toBe(false)
  })
})
