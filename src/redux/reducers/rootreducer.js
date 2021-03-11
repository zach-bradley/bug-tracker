import {SUBMIT_BUG, FETCH_BUG, GET_BUGS, UPDATE_BUG, RESOLVE_BUG} from '../actions/actionTypes';
const INITIAL_STATE = {
  bugs: {
    "RF1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed" : {
      "id": "RF1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed",
      "desc": "	Associate can't log in",
      "date": "3/11/2021, 2:40:22 PM",
      "priority" : "low",
      "contact" : "associate@associate.com",
      "activity" : [{
        "timestamp": "3/11/2021, 2:40:22 PM",
        "desc" : "Messaged associate" 
      }]
    }
  }
};

function rootReducer(state = INITIAL_STATE, action) {
  switch(action.type) {
    case SUBMIT_BUG:
      return
    ;
    case FETCH_BUG:
      return 
    ;
    case GET_BUGS:
      return 
    ;
    case UPDATE_BUG:
      let bugsupdate = state.bugs;
      bugsupdate[action.id] = {...bugsupdate[action.id], activity: [...bugsupdate[action.id].activity, action.update]}
      return {
        ...state, 
        bugs: bugsupdate
      }
    ;
    case RESOLVE_BUG:
      return
    ;
    default:
      return state;
  }
}

export default rootReducer