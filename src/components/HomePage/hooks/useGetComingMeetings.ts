import { useSetRecoilState } from 'recoil';
import { ENDPOINTS, getMeetings } from '../api/getMeetings';
import { GetMeetingsRequestParams } from '../models/RequestParams';
import { MeetingsArray } from '../models/Meeting';
import { comingMeetingsState } from '../atoms/nearestMeetings';

const useGetComingMeetings = (meetingsAmount: string) => {
    const setcomingMeetings = useSetRecoilState(comingMeetingsState);
    const searchParams = new URLSearchParams();
    searchParams.append('amount', meetingsAmount);

    const requestParams: GetMeetingsRequestParams = {
        endpoint: ENDPOINTS.LAST,
        searchParams,
    };

    return () => 
        getMeetings<MeetingsArray>(requestParams)
        .then(res => setcomingMeetings(res));
};

export default useGetComingMeetings;
