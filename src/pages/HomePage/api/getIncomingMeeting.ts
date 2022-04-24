import { getHttpClient } from 'shared/utils/http-client';
import { MEETINGS_ENDPOINTS } from 'pages/HomePage/models/MeetingsEndpoints';
import { Meeting } from 'pages/HomePage/models/Meeting';

type GetIncomingMeetingResponse = Meeting

const { INCOMING } = MEETINGS_ENDPOINTS;

export const getIncomingMeeting = async (): Promise<GetIncomingMeetingResponse> => {
    const settings = {
        areInterceptors: true,
    };

    return getHttpClient(settings).get<GetIncomingMeetingResponse>(INCOMING);
}
