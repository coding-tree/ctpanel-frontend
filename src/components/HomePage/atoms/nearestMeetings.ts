import { atom } from 'recoil';
import { Meeting, MeetingsArray } from '../models/Meeting';

export const comingMeetingsState = atom({
    key: 'comingMeetingsState',
    default: [] as MeetingsArray,
});

export const incomingMeetingState = atom({
    key: 'incomingMeetingState',
    default: null as Meeting | null,
});
