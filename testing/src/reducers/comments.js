import { SAVE_COMMENT, FETCH_COMMENTS } from 'actions/types';

//initial state, state=[]
export default function(state = [], action) {
  switch (action.type) {
    case SAVE_COMMENT:
      //getting the old array, and then attaching the comment sent to the existing state
      return [...state, action.payload];
    case FETCH_COMMENTS:
      const comments = action.payload.data.map(comment => comment.name);
      return [...state, ...comments];
    default:
      return state;
  }
}
