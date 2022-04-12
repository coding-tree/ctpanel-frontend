import { useRecoilValue } from 'recoil';
import { comingMeetingsState } from 'pages/HomePage/store/selectors/comingMeetings';
import { useRefreshRequestIDHandler } from 'shared/hooks/useRefreshRequestIDHandler';

const COMING_MEETINGS = "COMING_MEETINGS";

export const useComingMeetingsState = () => {
    const comingMeetings = useRecoilValue(comingMeetingsState(COMING_MEETINGS));
    const refetchComingMeetings = useRefreshRequestIDHandler(COMING_MEETINGS);
    
    return {
        comingMeetings,
        refetchComingMeetings,
    };
};
