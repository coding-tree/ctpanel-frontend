import { selector } from 'recoil';
import { Meeting } from '../../models/Meeting';
import {ENDPOINTS, getMeetings} from '../../api/getMeetings'
import {GetMeetingsRequestParams} from '../../models/RequestParams'

const getIncomingMeeting = () => {
    const requestParams: GetMeetingsRequestParams = {
        endpoint: ENDPOINTS.INCOMING,
    };

    return getMeetings<Meeting>(requestParams);
};

export const incomingMeetingState = selector({
    key: 'incomingMeetingState',
    get: async () => {
        return await getIncomingMeeting()
    },
});
