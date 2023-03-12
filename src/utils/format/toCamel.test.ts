import { describe, test, expect } from 'vitest'

import toCamel from './toCamel'

describe('toCamel util', () => {
  test('check : case', () => {
    expect(toCamel('dots:case')).toBe('dotsCase')
  })
  test('check snake case', () => {
    expect(toCamel('snake_case')).toBe('snakeCase')
  })
  test('check kebab case', () => {
    expect(toCamel('kebab-case')).toBe('kebabCase')
  })
  test('check pascal case', () => {
    expect(toCamel('PascalCase')).toBe('pascalCase')
  })
  test('check mix case', () => {
    expect(toCamel('Mix_turbo-case-Op:dots')).toBe('mixTurboCaseOpDots')
  })

  // TYPES CHECK
  test('check an string', () => {
    expect(toCamel('string')).toBeTypeOf('string')
  })
  test('check an array', () => {
    // @ts-expect-error
    expect(toCamel([])).toBeTypeOf('string')
  })
  test('check an empty object', () => {
    // @ts-expect-error
    expect(toCamel({})).toBeTypeOf('string')
  })
  test('check an number', () => {
    // @ts-expect-error
    expect(toCamel(555)).toBeTypeOf('string')
  })
  test('check an Date', () => {
    const date = new Date()
    // @ts-expect-error
    expect(toCamel(date)).toBeTypeOf('string')
  })
  test('check an null value', () => {
    // @ts-expect-error
    expect(toCamel(null)).toBeTypeOf('string')
  })
  test('check an undefined', () => {
    // @ts-expect-error
    expect(toCamel(undefined)).toBeTypeOf('string')
  })
  test('check an function', () => {
    // @ts-expect-error
    expect(toCamel(function () {})).toBeTypeOf('string')
  })
})
