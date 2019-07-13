import get from '../../src'
import { expect } from 'chai'

describe('get()', () => {
  it('works', () => {
    const obj = { a: { b: 0 }}
    const path = 'a.b'
    const value = get(obj, path, 'fallback')

    expect(value).to.be.equal(0)
  })
})
