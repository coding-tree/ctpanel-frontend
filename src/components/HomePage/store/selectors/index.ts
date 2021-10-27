import { selector } from 'recoil';
import { MeetingsArray } from '../../models/Meeting';
import {ENDPOINTS, getMeetings} from '../../api/getMeetings'
import {commingMeetingAmountState} from '../atoms/nearestMeetings'
import {GetMeetingsRequestParams} from '../../models/RequestParams'
import { apiCallID } from '../atoms/nearestMeetings';

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
        get(apiCallID)
        const meetingsAmount = get(commingMeetingAmountState)
        return await getComingMeetings(meetingsAmount)
    },
});