const initialState = {
  isLoading: false,
  isError: false,
};
export const reducer = (oldState = initialState, action) => {
  const { type, payload } = action;
  return oldState;
};
