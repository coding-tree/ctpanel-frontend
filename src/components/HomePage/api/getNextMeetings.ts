import NextMeeting from '../types/NextMeeting.model';

interface HttpResponse extends Array<NextMeeting>{};

const basicURL = 'https://api.ctpanel.pl/meetings/last';
const meetingsQuery = '?amount=';
const meetingsDefaultAmount = 3;

export default async function getNextMeetings(meetingsAmount?: number): Promise<HttpResponse> {
    const URL = basicURL + meetingsQuery + (meetingsAmount ? meetingsAmount : meetingsDefaultAmount);
    
    const response = await fetch(URL, { credentials: 'include' });
    const body = await response.json();

    return body;
};
