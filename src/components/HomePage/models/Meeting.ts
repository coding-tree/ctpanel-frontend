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

export type MeetingsArray = Meeting[] | null;
