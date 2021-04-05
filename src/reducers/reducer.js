import { REFINE_RESULTS, SET_RESULTS } from "../constants/action.types"

const initialState = {
  searchResults: [],
  refinedResults: [],
  refineText: "",
  onlyHD: false
}


export default function appReducer(state = initialState, action) {
  switch (action.type) {
    case SET_RESULTS:
      return { ...state, searchResults: action.payload.items }
    case REFINE_RESULTS:
      return { ...state, refineText: action.payload.refineText, onlyHD: action.payload.onlyHD, refinedResults: action.payload.refinedResults }
    default:
      return state
  }
}