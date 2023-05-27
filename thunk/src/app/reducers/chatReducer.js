import ActionTypes from '../../app/constants/actionTypes';

const initialState = {
  users: [],
  posts: [],
  loading: false,
};

export const chatReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_USERS:
      return {
        ...state,
        users: payload,
        loading: false,
      };
    case ActionTypes.SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case ActionTypes.SET_POSTS:
      return {
        ...state,
        posts: payload,
      };

    default:
      return state;
  }
};
