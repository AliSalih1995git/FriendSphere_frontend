import { createFeatureSelector } from '@ngrx/store';
import { Friend } from './friend';

export const selectFriends = createFeatureSelector<Friend[]>('myFriends');
