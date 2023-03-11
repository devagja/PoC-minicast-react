import { describe, test, expect } from 'vitest'

import isObject from './isObject'

describe('isObject util', () => {
  test('check an array', () => {
    expect(isObject([])).toBe(false)
  })
  test('check an empty object', () => {
    expect(isObject({})).toBe(true)
  })
  test('check an string', () => {
    expect(isObject('string')).toBe(false)
  })
  test('check an number', () => {
    expect(isObject(555)).toBe(false)
  })
  test('check an Date', () => {
    expect(isObject(new Date())).toBe(true)
  })
  test('check an null value', () => {
    expect(isObject(null)).toBe(false)
  })
  test('check an undefined', () => {
    expect(isObject(undefined)).toBe(false)
  })
  test('check an function', () => {
    expect(isObject(function () {})).toBe(false)
  })
})
