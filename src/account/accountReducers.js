import { fromJS } from 'immutable';

import {
  ACCOUNT_ADD_SUCCEEDED,
  DEV_EMAILS_SUCCEEDED,
  DEV_EMAILS_FAILED,
} from './accountActions';


const initialState = fromJS({
  activeBackend: null,
  authBackends: [],
  directUsers: [],
  directAdmins: [],
  errors: [],
});

export default (state = initialState, action) => {
  switch (action.type) {
    case ACCOUNT_ADD_SUCCEEDED: {
      return state.merge(fromJS({
        authBackends: action.authBackends,
        activeBackend: null,
        directUsers: [],
        directAdmins: [],
      }));
    }
    case DEV_EMAILS_FAILED:
      return state.merge({
        errors: action.errors,
      });
    case DEV_EMAILS_SUCCEEDED:
      return state.merge({
        activeBackend: 'dev',
        directUsers: action.directUsers,
        directAdmins: action.directAdmins,
      });
    default:
      return state;
  }
};
