import { describe, test, expect } from 'vitest'

import keysToCamel from './keysToCamel'

describe('keysToCamel util', () => {
  test('check an object with bad keys', () => {
    const badlyObj = {
      'First-_key': 5,
      'Second_:::key': {
        '___:Third:::-_-Key': null
      }
    }
    const obj = {
      firstKey: 5,
      secondKey: {
        thirdKey: null
      }
    }
    expect(keysToCamel(badlyObj)).toStrictEqual(obj)
  })
  // TYPES CHECK
  test('check an array', () => {
    expect(keysToCamel([])).toBeTypeOf('object')
  })
  test('check an empty object', () => {
    expect(keysToCamel({})).toBeTypeOf('object')
  })
  test('check an Date', () => {
    const date = new Date()
    expect(keysToCamel(date)).toBe(date)
  })
  test('check an function', () => {
    const fn = function (): void {}
    expect(keysToCamel(fn)).toBe(fn)
  })
  test('check an string', () => {
    // @ts-expect-error
    expect(keysToCamel('string')).toBe('string')
  })
  test('check an number', () => {
    // @ts-expect-error
    expect(keysToCamel(555)).toBe(555)
  })
  test('check an null value', () => {
    // @ts-expect-error
    expect(keysToCamel(null)).toBe(null)
  })
  test('check an undefined', () => {
    // @ts-expect-error
    expect(keysToCamel(undefined)).toBe(undefined)
  })
})
