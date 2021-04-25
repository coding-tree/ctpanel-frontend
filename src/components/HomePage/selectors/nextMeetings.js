import { selectorFamily, selector } from "recoil";
import { getNextMeetings } from '../api/getNextMeetings';

export const takeNextMeetings = selectorFamily({
  key: 'takeNextMeetings',
  get: () => async () => {
    const response = await getNextMeetings();
    if (response.error) {
      throw response.error;
    }
    return response;
  },
});

export const readNextMeetings = selector({
  key: 'readNextMeetings',
  get: ({get}) => {
    const response = get(takeNextMeetings());
    return response;
  },
});

export const readTheNearestMeeting = selector({
  key: 'readTheNearestMeeting',
  get: ({get}) => {
    const [theNearestMeeting, ..._] = get(readNextMeetings);
    return theNearestMeeting;
  },
});

//TODO: Rambda
