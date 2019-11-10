import axios from 'axios';
import {GET_MATERIALES} from './types';



// GET  MATERIALES
export const getMateriales = () => async dispatch => {
    const res = await axios.get('http://localhost:8000/api/materiales/');
    dispatch({
      type: GET_MATERIALES,
      payload: res.data
    });
  };