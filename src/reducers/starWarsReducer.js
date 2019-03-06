import { 
  CHARS_FETCHING, 
  CHARS_SUCCESS, 
  CHARS_FAILURE 
} from "../actions";

const initialState = {
  characters: [],
  fetching: false,
  error: null
  // Array characters, Boolean fetching, null error.
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.
    case CHARS_FETCHING:
      return{
        ...state,
        error: null,
        fetching: true,
      };
    case CHARS_SUCCESS:
      return{
        ...state,
        error: null,
        fetching:false,
        characters: action.payload
      }
    case CHARS_FAILURE:
      return{
        ...state,
        error: action.payload,
        fetching:false,
      }
    default:
      return state;
  }
};

export default charsReducer;