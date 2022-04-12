import { getMeetings } from 'pages/HomePage/api/getMeetings';
import { MEETINGS_ENDPOINTS } from 'pages/HomePage/models/MeetingsEndpoints';
import { Meeting } from 'pages/HomePage/models/Meeting';
import { GetMeetingsRequestParams } from 'pages/HomePage/models/RequestParams';

const { INCOMING } = MEETINGS_ENDPOINTS;

export const getIncomingMeeting = () => {
    const requestParams: GetMeetingsRequestParams = {
        endpoint: INCOMING,
    };

    return getMeetings<Meeting>(requestParams);
};
