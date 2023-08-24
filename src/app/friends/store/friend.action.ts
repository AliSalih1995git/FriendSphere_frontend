import { createAction, props } from '@ngrx/store';
import { Friend } from './friend';

export const invokeFriendData = createAction(
  '[Friend Data] invoke friends Data '
);

export const invokeFriendDataSuccess = createAction(
  '[Friend Data] invoke friends Data success',
  props<{ allFriends: Friend[] }>()
);
