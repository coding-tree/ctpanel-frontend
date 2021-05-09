import { atom } from 'recoil';

import { NextMeetingsArray } from '../models/NextMeeting';

export const nextMeetings = atom({
    key: 'nextMeetings',
    default: [] as NextMeetingsArray,
});
