import { useSetRecoilState } from 'recoil';
import { requestIDState } from 'shared/store/atoms/requestID';

export const useRefreshRequestIDHandler = (atomFamilyName: string): () => void => {
    const setRequestIDState = useSetRecoilState(requestIDState(atomFamilyName));
    const refreshRequestIDState = () => setRequestIDState(requestID => requestID + 1);

    return refreshRequestIDState;
};
