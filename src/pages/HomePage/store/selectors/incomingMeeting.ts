import { selectorFamily } from 'recoil';
import { requestIDState } from 'shared/store/atoms/requestID';
import { getIncomingMeeting } from 'pages/HomePage/api/getIncomingMeeting';

export const incomingMeetingState = selectorFamily({
    key: 'incomingMeetingState',
    get: requestID => async ({get}) => {
        get(requestIDState(requestID));
        return await getIncomingMeeting();
    },
});
