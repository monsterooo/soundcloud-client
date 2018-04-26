import SC from 'soundcloud';
import * as actionTypes from '../constants/actionTypes';
import { setTracks } from '../actions/track';

function setMe(user) {
  return {
    type: actionTypes.ME_SET,
    user,
  };
};

export function auth() {
  return function(dispatch) {
    SC.connect().then((session) => {
      console.log('session > ', session);
      dispatch(fetchMe(session));
      dispatch(fetchStream(session));
    });
  }
};

function fetchStream(session) {
  return function(dispatch) {
    fetch(`//api.soundcloud.com/me/activities?limit=20&offset=0&oauth_token=${session.oauth_token}`)
      .then((response) => response.json())
      .then((data) => {
        dispatch(setTracks(data.collection));
      });
  }
}
function fetchMe(session) {
  return function(dispatch) {
    fetch(`//api.soundcloud.com/me?oauth_token=${session.oauth_token}`)
    .then((response) => response.json())
    .then((data) => {
      console.log('user data > ', data);
      dispatch(setMe(data));
    });
  }
}