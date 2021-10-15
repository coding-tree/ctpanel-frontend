import { atom } from 'recoil';
import { Meeting } from '../../models/Meeting';

export const commingMeetingAmountState = atom({
    key: 'commingMeetingAmountState',
    default: 3
});

export const incomingMeetingState = atom({
    key: 'incomingMeetingState',
    default: null as Meeting | null,
});
