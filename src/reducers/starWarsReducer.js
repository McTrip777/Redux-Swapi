import CHARS_FETCHING from "./actions";
import CHARS_SUCCESS from "./actions";
import CHARS_FAILURE from "./actions";
// import {Character} from '../components/index'

const initialState = {
  characters: [],
  isLoading: false,
  error: ''
  // Array characters, Boolean fetching, null error.
};
export function charsReducer(state = initialState, action) {
  switch (action.type) {
    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.
    case CHARS_FETCHING:
      return{
        ...state,
        error: '',
        inLoading: true,
      };
    case CHARS_SUCCESS:
      return{
        ...state,
        error: '',
        isLoading:false,
        Characters: action.payload,
      }
    case CHARS_FAILURE:
      return{
        ...state,
        error: action.payload,
        isLoading:false,
      }
    default:
      return state;
  }
};

export default charsReducer;