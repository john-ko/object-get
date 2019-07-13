import { convertStringToArray } from '../../src'
import { expect } from 'chai'

describe('convertStringToArray()', () => {
  it('default arguments', () => {
    const convertedPath = convertStringToArray()

    expect(convertedPath).to.be.deep.equal([])
  })

  it('returns an array from a string', () => {
    const path = 'path.from.object'
    const convertedPath = convertStringToArray(path)

    expect(convertedPath).to.be.deep.equal(['path', 'from', 'object'])
  })

  it('returns an array from using brackets', () => {
    const path = 'path[key][0][value]'
    const convertedPath = convertStringToArray(path)

    expect(convertedPath).to.deep.equal(['path', 'key', '0', 'value'])
  })

  it('returns an empty array if no path is found', () => {
    const path = ''
    const convertedPath = convertStringToArray(path)

    expect(convertedPath).to.deep.equal([])
  })

  it('removes any empty connections', () => {
    const path = '.....object[][].[]...'
    const convertedPath = convertStringToArray(path)

    expect(convertedPath).to.deep.equal(['object'])
  })

  it('can mix brackets with periods', () => {
    const path = '0.c[1].d'
    const convertedPath = convertStringToArray(path)

    expect(convertedPath).to.deep.equal(['0', 'c', '1', 'd'])
  })
})
