import isArray from './isArray'

function isObject(o: any): boolean {
  return o === Object(o) && !isArray(o) && typeof o !== 'function'
}

export default isObject
