import get from '../../src'
import { expect } from 'chai'

describe('get()', () => {
  it('default arguments', () => {
    const value = get()

    expect(value).to.be.null
  })
  it('works', () => {
    const obj = { a: { b: 0 }}
    const path = 'a.b'
    const value = get(obj, path, 'fallback')

    expect(value).to.be.equal(0)
  })
})
