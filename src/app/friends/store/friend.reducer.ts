import { createReducer, on } from '@ngrx/store';
import { Friend } from './friend';
import { invokeFriendDataSuccess } from './friend.action';

export const initialState: ReadonlyArray<Friend> = [];

export const friendReducer = createReducer(
  initialState,
  on(invokeFriendDataSuccess, (state, { allFriends }) => {
    return allFriends;
  })
);
