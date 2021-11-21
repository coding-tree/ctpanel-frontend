import { selector } from 'recoil';
import { MeetingsArray } from '../../models/Meeting';
import { ENDPOINTS, getMeetings } from '../../api/getMeetings'
import { GetMeetingsRequestParams } from '../../models/RequestParams'

const getComingMeetings = (meetingsAmount: number) => {
    const searchParams = new URLSearchParams();
    searchParams.append('amount', meetingsAmount.toString());

    const requestParams: GetMeetingsRequestParams = {
        endpoint: ENDPOINTS.LAST,
        searchParams,
    };

    return  getMeetings<MeetingsArray>(requestParams);
};

export const comingMeetingsState = selector({
    key: 'comingMeetingsState',
    get: async ({get}) => {
        return await getComingMeetings(3)
    },
});
