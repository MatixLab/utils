import { describe, expect, it } from 'bun:test'

import { isEmptyObject } from './objects'

describe('isEmptyObject', () => {
  it('returns true for an empty object', () => {
    expect(isEmptyObject({})).toBe(true)
  })

  it('returns true for an object with no properties', () => {
    expect(isEmptyObject()).toBe(true)
  })

  it('returns false for an object with properties', () => {
    expect(isEmptyObject({ a: 1 })).toBe(false)
  })
})

