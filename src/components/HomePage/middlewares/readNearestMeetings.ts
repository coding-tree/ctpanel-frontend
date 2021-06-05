import { ENDPOINTS, getMeetings } from '../api/getMeetings';
import { GetMeetingsRequestParams } from '../models/RequestParams';
import { Meeting } from '../models/Meeting';

export const getComingMeetings = async <T>(meetingsAmount: string, savingCallback: (response: T) => void) => {
    const searchParams = new URLSearchParams();
    searchParams.append('amount', meetingsAmount);

    const requestParams: GetMeetingsRequestParams = {
        endpoint: ENDPOINTS.LAST,
        searchParams,
    };

    const comingMeetings: T = await getMeetings<T>(requestParams);
    savingCallback(comingMeetings);
};

export const getIncomingMeeting = async (savingCallback: (response: Meeting) => void) => {
    const requestParams = {
        endpoint: ENDPOINTS.INCOMING,
    };

    const incomingMeeting: Meeting = await getMeetings<Meeting>(requestParams);
    savingCallback(incomingMeeting);
};
