const initialState = {
  trending: [],
  watched: [],
  boxOffice: [],
  anticipated: [],
  isLoading: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SET_TRENDING':
      return { ...state, trending: action.payload }
    case 'SET_WATCHED':
      return { ...state, watched: action.payload }
    case 'SET_BOXOFFICE':
      return { ...state, boxOffice: action.payload }
    case 'SET_ANTICIPATED':
      return { ...state, anticipated: action.payload }
    case 'IS_LOADING':
      return { ...state, isLoading: action.payload }

    default:
      return state
  }
}
