import { selectorFamily, useRecoilValue } from 'recoil';
import { requestIDState } from 'shared/store/atoms/requestID';
import { ENDPOINTS, getMeetings } from 'pages/HomePage/api/getMeetings';
import { useRefreshRequestIDHandler } from 'shared/hooks/useRefreshRequestIDHandler';
import { MeetingsArray } from 'pages/HomePage/models/Meeting';
import { GetMeetingsRequestParams } from 'pages/HomePage/models/RequestParams';

const COMING_MEETINGS = "COMING_MEETINGS";

const getComingMeetings = (meetingsAmount: number) => {
    const searchParams = new URLSearchParams();
    searchParams.append('amount', meetingsAmount.toString());

    const requestParams: GetMeetingsRequestParams = {
        endpoint: ENDPOINTS.LAST,
        searchParams,
    };

    return getMeetings<MeetingsArray>(requestParams);
};

const comingMeetingState = selectorFamily({
    key: 'comingMeetingsState',
    get: requestID => async ({get}) => {
        get(requestIDState(requestID));
        return await getComingMeetings(3);
    },
});

export const useComingMeetingsState = () => {
    const refreshRequestID = useRefreshRequestIDHandler(COMING_MEETINGS);
    const comingMeetings = useRecoilValue(comingMeetingState(COMING_MEETINGS));
    return {
        comingMeetings,
        refreshRequestID,
    };
};
