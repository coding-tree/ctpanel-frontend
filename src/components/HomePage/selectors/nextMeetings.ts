import { selectorFamily, selector } from "recoil";
import { getNextMeetings } from '../api/getNextMeetings';
import { NextThreeMeetingsArray } from '../models/NextMeeting';

export const takeNextMeetings = selectorFamily({
  key: 'takeNextMeetings',
  get: <T> (meetingsAmount: string) => async () => {
    const response: T = await getNextMeetings<T>(meetingsAmount);
    // if (response.error) {
    //   throw response.error;
    // }
    return response;
  },
});

export const readNextMeetings = selector({
  key: 'readNextMeetings',
  get: ({get}) => {
    const response: NextThreeMeetingsArray = get<NextThreeMeetingsArray>(takeNextMeetings('3'));
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

//TODO:
//1: Rambda
//2: Obsługa błędów
