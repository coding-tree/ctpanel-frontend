import { useRecoilValue } from 'recoil';
import { incomingMeetingState } from 'pages/HomePage/store/selectors/incomingMeeting';
import { useRefreshRequestIDHandler } from 'shared/hooks/useRefreshRequestIDHandler';

const INCOMING_MEETING = "INCOMING_MEETING";

export const useIncomingMeetingState = () => {
    const incomingMeeting = useRecoilValue(incomingMeetingState(INCOMING_MEETING));
    const refetchIncomingMeeting = useRefreshRequestIDHandler(INCOMING_MEETING);
    
    return {
        incomingMeeting,
        refetchIncomingMeeting,
    };
};
