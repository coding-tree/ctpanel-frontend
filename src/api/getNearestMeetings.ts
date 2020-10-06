import NearestMeeting from 'types/NearestMeetings.model';

export default async function getNearestMeetings(): Promise<NearestMeeting[]> {
    let amountOfPosts = 3;

    const response = await fetch(`https://api.ctpanel.pl/meetings/last?amount=${amountOfPosts}`, { credentials: 'include' });
    const body = await response.json();
    return body;
};