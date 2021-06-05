import React, { FunctionComponent, useEffect } from 'react';
import { useSetRecoilState } from "recoil";
import { comingMeetingsState, incomingMeetingState } from './atoms/nearestMeetings';
import { getComingMeetings, getIncomingMeeting } from './middlewares/readNearestMeetings';
import HomeTemplate from './templates/HomeTemplate';
import { NextThreeMeetingsArray } from './models/Meeting';

const HomePage: FunctionComponent = () => {
   const setComingMeetings = useSetRecoilState(comingMeetingsState);
   const setIncomingMeeting = useSetRecoilState(incomingMeetingState);

   useEffect(() => {
      const meetingsAmount = "3";

      getComingMeetings<NextThreeMeetingsArray>(meetingsAmount, setComingMeetings);
      getIncomingMeeting(setIncomingMeeting);
   }, []);

   return (
      <HomeTemplate />
   );
};

export default HomePage;
