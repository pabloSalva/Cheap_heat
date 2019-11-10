import _ from 'lodash';
import { GET_MATERIAL } from '../actions/types';

export default (state = {}, action) => {
  switch (action.type) {
    case GET_MATERIAL:
      return {
        ...state,
        ..._.mapKeys(action.payload, 'id')
      };
    default:
      return state;
  }
};