import { ActionReducer, Action } from '@ngrx/store';
import { AuthUserActions } from 'src/app/auth/actions';

export function logoutMetaReducer(reducer: ActionReducer<any>) {
  return function (state: any, action: Action): any {
    if (action.type === AuthUserActions.logout.type) {
      return reducer(undefined, action);
    }

    return reducer(state, action);
  };
}
