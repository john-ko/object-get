export default function get (object = {}, path = '', fallback = null) {

}

export function convertPath (path = '') {
  if (Array.isArray(path)) {
    // do array stuff
  }

  if (typeof path === 'string') {
    // do string stuff
    return convertStringToArray(path)
  }
}

export function validatePath (path = []) {
  return path.filter(Boolean)
}

export function convertStringToArray (path = '') {
  return validatePath(path.split(/\.|\[|\]/))
}