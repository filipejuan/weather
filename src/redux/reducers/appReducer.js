const INITIAL_STATE = {
  apiKey: 'e633db5807650314821857e880965b2e',
  cities: ['Dallol', 'Fairbanks', 'London', 'Recife', 'Vancouver', 'Yakutsk'],
  cityData: {},
  errorWeather: false
}

const appReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case 'SET_CITY_DATA':
      return { ...state, cityData: action.payload, errorWeather: false }
    case 'SET_ERROR_CITY_DATA':
      return { ...state, errorWeather: true }
    case 'CLEAR_CITY_DATA':
      return { ...state, cityData: {}, errorWeather: false }
    default:
      return state;
  }
}

export default appReducer;