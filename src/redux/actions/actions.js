import {SUBMIT_BUG, FETCH_BUG, GET_BUGS, UPDATE_BUG, RESOLVE_BUG} from '../actions/actionTypes';

export function submitBug(){

};

export function updateBug(id, desc){
  let timestamp = new Date().toLocaleString();
  let update = {
    "timestamp" : timestamp,
    "desc" : desc
  }
  return {
    type: UPDATE_BUG,
    id,
    update
  }
}