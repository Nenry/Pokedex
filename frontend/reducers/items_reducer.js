import merge from 'lodash/merge';

export const itemsReducer = (state = {}, action) => {
  Object.freeze(state);
  let item;
  switch(action.type) {
    case RECEIVE_ALL_ITEMS:
      return merge({}, state, action.items);
    case RECEIVE_SINGLE_ITEM:
      item = action.payload.item;
      return merge({}, state, action.payload.item);
    default:
    return state;
  }
};
