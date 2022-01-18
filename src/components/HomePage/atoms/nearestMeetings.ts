import { atom } from 'recoil';
import { MeetingsArray } from '../models/Meeting';

export const comingMeetingsState = atom({
    key: 'comingMeetingsState',
    default: null as MeetingsArray,
});

export const incomingMeetingState = atom({
    key: 'incomingMeetingState',
    default: null as MeetingsArray,
});
