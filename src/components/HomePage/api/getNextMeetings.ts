import { getHttpClient } from '../../../shared/utils/http-client';

const basicURL = 'https://api.ctpanel.pl/meetings/last';
const MEETINGS_DEFAULT_AMOUNT = '3';

export const getNextMeetings =  async <T> (meetingsAmount: string = MEETINGS_DEFAULT_AMOUNT): Promise<T> => {
    const settings = {
        areInterceptors: true,
    };
    
    const params = new URLSearchParams();
    params.append('amount', meetingsAmount);
    
    const nextMeetingArray = await getHttpClient(settings).get<T>(basicURL, { params });
    return nextMeetingArray;
};

//TODO:
//1: getPreviousMeetings
//2: getComingMeetings
//3: Jakiś parser, który zwaliduje nam body
//4: Zmienić NextMeeting na Meeting
//5: Obsługa błędów
