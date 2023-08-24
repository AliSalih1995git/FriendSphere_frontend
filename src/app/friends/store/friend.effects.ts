import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { FriendService } from '../friend.service';
import { invokeFriendData, invokeFriendDataSuccess } from './friend.action';
import { map, switchMap } from 'rxjs';

@Injectable()
export class FriendEffects {
  constructor(
    private actions$: Actions,
    private friendService: FriendService
  ) {}

  loadAllFriend$ = createEffect(() =>
    this.actions$.pipe(
      ofType(invokeFriendData),
      switchMap(() =>
        this.friendService
          .getFriendsPageInfos()
          .pipe(map((data) => invokeFriendDataSuccess({ allFriends: data })))
      )
    )
  );
}
