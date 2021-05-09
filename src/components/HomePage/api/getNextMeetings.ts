import NextMeeting from '../types/NextMeeting.model';
import { getHttpClient } from '../../../shared/utils/http-client';
type NextMeetingArray = [NextMeeting]; //alias

const a = 'https://run.mocky.io/v3/01a396fe-4325-45b4-9548-4a200844ea88';
const basicURL = 'https://api.ctpanel.pl/meetings/last';
const MEETINGS_DEFAULT_AMOUNT = '3';

export const getNextMeetings = async (meetingsAmount: string = MEETINGS_DEFAULT_AMOUNT): Promise<NextMeetingArray> => {
    const settings = {
        areInterceptors: true,
    };
    
    const params = new URLSearchParams();
    params.append('amount', meetingsAmount);
    
    const nextMeetingArray = await getHttpClient(settings).get<NextMeetingArray>(basicURL, { params });
    console.log(nextMeetingArray)
    return nextMeetingArray;
};

//TODO:
//getPreviousMeetings
//getComingMeetings

//jakiś parser, który zwaliduje nam body

//zmienić NextMeeting na Meeting
//opbsługa błędów
