interface FnMap {
  [key: string]: (state: any, action: any, ...rest: any) => Object
}

export default (initialState: any, fnMap: FnMap) => (
  state: any,
  action: any,
  ...rest: any
) => {
  const { type } = action
  const handler = fnMap[type]
  const newState = state || initialState

  return handler ? handler(newState, action, ...rest) : newState
}
