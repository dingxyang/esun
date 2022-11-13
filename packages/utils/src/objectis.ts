function is(x: any, y: any) {
  // eslint-disable-next-line no-self-compare
  return (x === y && (x !== 0 || 1 / x === 1 / y)) || (x !== x && y !== y)
}

const objectIs: (x: any, y: any) => Boolean
= typeof Object.is === 'function' ? Object.is : is

export default objectIs
