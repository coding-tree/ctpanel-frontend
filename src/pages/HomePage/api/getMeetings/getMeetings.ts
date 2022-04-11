import { getHttpClient } from 'shared/utils/http-client';
import { GetMeetingsRequestParams } from 'pages/HomePage/models/RequestParams';

const basicURL = 'https://api.ctpanel.pl/';

const getMeetings =  async <T> (requestParams: GetMeetingsRequestParams): Promise<T> => {
    const settings = {
        areInterceptors: true,
    };

    const {
        endpoint,
        searchParams
    } = requestParams;

    const { href: requestURL } = new URL(endpoint, basicURL);
  
    const nextMeetingArray = await getHttpClient(settings).get<T>(requestURL, { params: searchParams});
    return nextMeetingArray;
};

export default getMeetings;

//TODO:
//1: getPreviousMeetings
//2: getComingMeetings
//3: Jakiś parser, który zwaliduje nam body
//4: Zmienić NextMeeting na Meeting
//5: Obsługa błędów
//6: Konwerter number na string
