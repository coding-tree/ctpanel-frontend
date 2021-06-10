import { atom } from 'recoil';
import { MeetingState, NextThreeMeetingsArrayState } from '../models/Meeting';

export const comingMeetingsState = atom({
    key: 'comingMeetingsState',
    default: null as NextThreeMeetingsArrayState,
});

export const incomingMeetingState = atom({
    key: 'incomingMeetingState',
    default: null as MeetingState,
});
