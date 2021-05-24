import { ENDPOINTS, getMeetings } from '../api/getMeetings';
import { GetMeetingsRequestParams } from '../models/RequestParams';
import { Meeting, NextThreeMeetingsArray } from '../models/Meeting';

export const getComingMeetings = async (meetingsAmount: string, savingCallback: (response: NextThreeMeetingsArray) => void) => {
    const searchParams = new URLSearchParams();
    searchParams.append('amount', meetingsAmount);

    const requestParams: GetMeetingsRequestParams = {
        endpoint: ENDPOINTS.LAST,
        searchParams,
    };

    const comingMeetings: NextThreeMeetingsArray = await getMeetings<NextThreeMeetingsArray>(requestParams);
    savingCallback(comingMeetings);
};

export const getIncomingMeeting = async (savingCallback: (response: Meeting) => void) => {
    const requestParams = {
        endpoint: ENDPOINTS.INCOMING,
    };

    const incomingMeeting: Meeting = await getMeetings<Meeting>(requestParams);
    savingCallback(incomingMeeting);
};
