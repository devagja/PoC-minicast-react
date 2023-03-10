import isArray from './isArray'
import isObject from './isObject'
import toCamel from './toCamel'

// eslint-disable-next-line @typescript-eslint/consistent-indexed-object-style
interface keysToCamelParams {
  [x: string]: any
}

function keysToCamel(o: keysToCamelParams): keysToCamelParams {
  if (isObject(o)) {
    if (o instanceof Date) {
      return o
    }
    const n: any = {}

    Object.keys(o).forEach((k: string) => {
      n[toCamel(k)] = keysToCamel(o[k])
    })

    return n
  } else if (isArray(o)) {
    return o.map((i: any) => {
      return keysToCamel(i)
    })
  }

  return o
}
export default keysToCamel
