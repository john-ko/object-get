import { traversePath } from '../../src'
import { expect } from 'chai'

describe('traversePath()', () => {
  it('default arguments', () => {
    const value = traversePath()
    expect(value).to.be.equal(null)
  })

  it('returns the correct value with the path exists', () => {
    const obj = { a: { b: 0 }}
    const path = ['a', 'b']
    const value = traversePath(obj, path, 'not-found')

    expect(value).to.be.equal(0)
  })

  it('returns the fallback when path does not exist', () => {
    const obj = { a: { b: 3 }}
    const path = ['a', 'b', 'c']
    const value = traversePath(obj, path, 'not-found')

    expect(value).to.be.equal('not-found')
  })

  it('doesnt matter how deep the object is', () => {
    const obj = { a: { b: { c: { d: { e: { f :{ g: 'g' }}}}}}}
    const path = ['a', 'b', 'c', 'd', 'e', 'f', 'g']
    const value = traversePath(obj, path, 'was not found')

    expect(value).to.be.equal('g')
  })

  it('can traverse arrays', () => {
    const arr = [{ c: [0, { d: 0}, 1]}, 2 ]
    const path = ['0', 'c', '1', 'd']
    const value = traversePath(arr, path, 'was not found')

    expect(value).to.be.equal(0)
  })

  it('wont replace false values with fallback', () => {
    const obj = { a: { b: false }}
    const path = ['a', 'b']
    const value = traversePath(obj, path, 'not-found')

    expect(value).to.be.equal(false)
  })
})
