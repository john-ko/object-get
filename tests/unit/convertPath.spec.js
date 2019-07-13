import { convertPath } from '../../src'
import { expect } from 'chai'

describe('convertPath()', () => {
  describe('when string paths are passed down', () => {
    it('converts strings to arrays', () => {
      const path = 'path.to[object]'
      const convertedPath = convertPath(path)

      expect(convertedPath).to.be.deep.equal(['path', 'to', 'object'])
    })

    it('should not include .', () => {
      const path = 'a.b'
      const convertedPath = convertPath(path)

      expect(convertedPath).to.be.deep.equal(['a', 'b'])
    })
  })

  describe('when arrays are passed down', () => {
    it('just validates arrays', () => {
      const path = ['path', '', 'to', 'object']
      const convertedPath = convertPath(path)

      expect(convertedPath).to.be.deep.equal(['path', 'to', 'object'])
    })
  })

  describe('when wrong things are passed down', () => {
    it('returns an empty array', () => {
      const path = { key: 'value' }
      const convertedPath = convertPath(path)

      expect(convertedPath).to.be.deep.equal([])
    })
  })
})
