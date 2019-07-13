
export default function get (object = {}, path = '', fallback = null) {
  const convertedPath = convertPath(path)
  return traversePath(object, convertedPath, fallback)
}

export function traversePath (object = {}, path = [], fallback = null) {
  let reference = object

  for (let i = 0; i < path.length; i++) {
    const key = path[i]

    if (typeof reference !== 'object') return fallback
    if (reference[key] === undefined) return fallback

    reference = reference[key]
  }

  return reference
}

export function convertPath (path = '') {
  if (Array.isArray(path)) {
    // do array stuff
    return validatePath(path)
  }

  if (typeof path === 'string') {
    // do string stuff
    return convertStringToArray(path)
  }

  return []
}

export function validatePath (path = []) {
  return path.filter(Boolean)
}

export function convertStringToArray (path = '') {
  return validatePath(path.split(/\.|\[|\]/))
}