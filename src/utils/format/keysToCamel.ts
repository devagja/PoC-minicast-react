import toCamel from './toCamel'
import isArray from '../checkTypes/isArray'
import isObject from '../checkTypes/isObject'

// eslint-disable-next-line @typescript-eslint/consistent-indexed-object-style
interface keysToCamelParams {
  [x: string]: any
}

function keysToCamel (o: keysToCamelParams): any {
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
