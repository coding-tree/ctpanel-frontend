import { selectorFamily, useRecoilValue } from 'recoil';
import { requestIDState } from 'shared/store/atoms/requestID';
import { ENDPOINTS, getMeetings } from 'pages/HomePage/api/getMeetings';
import { useRefreshRequestIDHandler } from 'shared/hooks/useRefreshRequestIDHandler';
import { Meeting } from 'pages/HomePage/models/Meeting';
import { GetMeetingsRequestParams } from 'pages/HomePage/models/RequestParams';

const INCOMING_MEETING = "INCOMING_MEETING";

const getIncomingMeeting = () => {
    const requestParams: GetMeetingsRequestParams = {
        endpoint: ENDPOINTS.INCOMING,
    };

    return getMeetings<Meeting>(requestParams);
};

const incomingMeetingState = selectorFamily({
    key: 'incomingMeetingState',
    get: requestID => async ({get}) => {
        get(requestIDState(requestID));

        return await getIncomingMeeting();
    },
});

export const useIncomingMeetingState = () => {
    const refreshRequestID = useRefreshRequestIDHandler(INCOMING_MEETING);
    const incomingMeeting = useRecoilValue(incomingMeetingState(INCOMING_MEETING));
    
    return {
        incomingMeeting,
        refreshRequestID,
    };
};
