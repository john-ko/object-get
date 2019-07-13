import { validatePath } from '../../src'
import { expect } from 'chai'

describe('validatePath()', () => {
  it('default arguments', () => {
    const validatedPath = validatePath()

    expect(validatedPath).to.be.deep.equal([])
  })

  it('returns an empty array', () => {
    const path = []
    const validatedPath = validatePath(path)

    expect(validatedPath).to.be.deep.equal([])
  })

  it('removes any empty strings', () => {
    const path = ['', '', 'a', '', '', 'b', '', 'c']
    const validatedPath = validatePath(path)

    expect(validatedPath).to.deep.equal(['a', 'b', 'c'])
  })
})