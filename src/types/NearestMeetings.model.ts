interface NearestMeeting {
    date: number;
    description: string;
    duration: string;
    leader: string;
    meetingHref: string;
    tags: Array<string>;
    topic: string;
    usefulLinks: Array<string>;
    _id: string;
};

export interface NearestMeetingsModel extends NearestMeeting {};

export interface TheNearestMeetingsModel extends NearestMeeting {};