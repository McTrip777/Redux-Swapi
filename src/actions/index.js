// we'll need axios
import axios from 'axios';

// we'll need to create 3 different action types here.
// one for fetching, one for success and one for failure
export const CHARS_FETCHING = 'CHARS_FETCHING';
export const CHARS_SUCCESS = 'CHARS_SUCCESS';
export const CHARS_FAILURE = 'CHARS_FAILURE';

// our action creator will be a function that returns a function
// the url to fetch characters from is `https://swapi.co/api/people/`
// remember that now we have control over our thunk-based action creator


