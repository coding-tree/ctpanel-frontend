import { getMeetings } from 'pages/HomePage/api/getMeetings';
import { MEETINGS_ENDPOINTS } from 'pages/HomePage/models/MeetingsEndpoints';
import { MeetingsArray } from 'pages/HomePage/models/Meeting';
import { GetMeetingsRequestParams } from 'pages/HomePage/models/RequestParams';

const { LAST } = MEETINGS_ENDPOINTS;

export const getComingMeetings = (meetingsAmount: number) => {
    const searchParams = new URLSearchParams();
    searchParams.append('amount', meetingsAmount.toString());

    const requestParams: GetMeetingsRequestParams = {
        endpoint: LAST,
        searchParams,
    };

    return getMeetings<MeetingsArray>(requestParams);
};
