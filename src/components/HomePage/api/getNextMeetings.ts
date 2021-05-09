import NextMeeting from '../types/NextMeeting.model';
import { getHttpClient } from '../../../shared/utils/http-client';
type NextMeetingArray = [NextMeeting]; //alias

const basicURL = 'https://api.ctpanel.pl/meetings/last';
const MEETINGS_DEFAULT_AMOUNT = '3';

export const getNextMeetings = async (meetingsAmount: string = MEETINGS_DEFAULT_AMOUNT): Promise<NextMeetingArray> => {
    const params = new URLSearchParams();
    params.append('amount', meetingsAmount);
    
    const nextMeetingArray = await getHttpClient().get<NextMeetingArray>(basicURL, { params });
    return nextMeetingArray;
};

//TODO:
//getPreviousMeetings
//getComingMeetings

//jakiś parser, który zwaliduje nam body

//zmienić NextMeeting na Meeting
//opbsługa błędów
