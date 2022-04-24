import { getHttpClient } from 'shared/utils/http-client';
import { MEETINGS_ENDPOINTS } from 'pages/HomePage/models/MeetingsEndpoints';
import { MeetingsArray } from 'pages/HomePage/models/Meeting';

interface GetComingMeetingsResponse {
    data: MeetingsArray,
};

const { LAST } = MEETINGS_ENDPOINTS;

export const getComingMeetings = async (meetingsAmount: number): Promise<GetComingMeetingsResponse> => {
    const queryParams = {
        amount: meetingsAmount.toString(),
    };
    const searchParams = new URLSearchParams(queryParams);
    const endpoint = `${LAST}?${searchParams}`;

    return getHttpClient().get<GetComingMeetingsResponse>(endpoint);
}
