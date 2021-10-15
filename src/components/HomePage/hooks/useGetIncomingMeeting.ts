import { useSetRecoilState } from 'recoil';
import { ENDPOINTS, getMeetings } from '../api/getMeetings';
import { GetMeetingsRequestParams } from '../models/RequestParams';
import { Meeting } from '../models/Meeting';
import { incomingMeetingState } from '../store/atoms/nearestMeetings';

const useGetIncomingMeeting = () => {
    const setComingMeetings = useSetRecoilState(incomingMeetingState);
    
    const requestParams: GetMeetingsRequestParams = {
        endpoint: ENDPOINTS.INCOMING,
    };

    return () => 
        getMeetings<Meeting>(requestParams)
        .then(res => setComingMeetings(res));
};

export default useGetIncomingMeeting;
