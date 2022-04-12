import { selectorFamily } from 'recoil';
import { requestIDState } from 'shared/store/atoms/requestID';
import { getComingMeetings } from 'pages/HomePage/api/getComingMeetings';

export const comingMeetingsState = selectorFamily({
    key: 'comingMeetingsState',
    get: requestID => async ({get}) => {
        get(requestIDState(requestID));
        return await getComingMeetings(3);
    },
});
