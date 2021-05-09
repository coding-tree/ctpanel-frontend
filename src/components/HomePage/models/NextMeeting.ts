import { FixedSizeArray } from 'shared/models'; 

export interface NextMeeting {
    date: number;
    description: string;
    duration: string;
    leader: string;
    meetingHref: string;
    tags: Array<string>;
    topic: string;
    usefulLinks: Array<string>;
    _id: string;
}

export type NextMeetingsArray = NextMeeting[];

export type NextThreeMeetingsArray = FixedSizeArray<3, NextMeeting>;
