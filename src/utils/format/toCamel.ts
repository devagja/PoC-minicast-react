import camelCase from 'lodash.camelcase'

function toCamel(s: string): string {
  return camelCase(s)
}

export default toCamel
