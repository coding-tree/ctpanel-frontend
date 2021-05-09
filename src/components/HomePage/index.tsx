import React, { FunctionComponent } from 'react';
import { useRecoilValue } from "recoil";
import { NextMeeting, NextThreeMeetingsArray } from './models/NextMeeting';

import HomeTemplate from './templates/HomeTemplate';

import { readNextMeetings, readTheNearestMeeting } from './selectors/nextMeetings';

const HomePage: FunctionComponent = () => {
   const nearestMeetings: NextThreeMeetingsArray = useRecoilValue(readNextMeetings);
   const theNearestMeeting: NextMeeting = useRecoilValue(readTheNearestMeeting);
   
   return (
      <>
         {
            nearestMeetings && theNearestMeeting
            ? <HomeTemplate theNearestMeeting={theNearestMeeting} nearestMeetings={nearestMeetings}/>
            : <div>Ładowanie</div>
         }
      </>
   );
};

export default HomePage;
