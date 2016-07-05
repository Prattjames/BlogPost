import { FETCH_POSTS, CREATE_POST, GET_POST, DELETE_POST } from '../actions/index';

const INITIAL = {all: [], post: null };

export default (state = INITIAL, action) => {
  switch (action.type) {
    case FETCH_POSTS:
      return {...state, all: action.payload.data}
    case GET_POST:
      return {...state, post: action.payload.data}
   default:
     return state
   }
};
