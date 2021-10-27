import { useSetRecoilState } from 'recoil';
import { apiCallID } from '../atoms/nearestMeetings';

export const useSetNewApiCallID = () => {
  const setApiCallID = useSetRecoilState(apiCallID);
  return () => {
    const newApiCallID = Math.floor(Math.random() * 1000);
    setApiCallID(newApiCallID);
  };
}
