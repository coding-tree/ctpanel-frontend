import { atom } from 'recoil';

import NextMeeting from '../types/NextMeeting.model';

export const nextMeetings = atom({
    key: 'nextMeetings',
    default: [] as NextMeeting[],
});
