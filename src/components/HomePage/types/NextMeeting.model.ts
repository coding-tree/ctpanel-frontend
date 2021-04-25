export default interface NextMeeting {
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

//Zmienić folder na models i tutaj wydupcyć model
