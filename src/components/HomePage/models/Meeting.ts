import { FixedSizeArray } from 'shared/models'; 

export interface Meeting {
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

export type MeetingsArray = Meeting[];

export type NextThreeMeetingsArray = FixedSizeArray<3, Meeting>;

export type NextThreeMeetingsArrayState = NextThreeMeetingsArray | null;

export type MeetingState = Meeting | null;
