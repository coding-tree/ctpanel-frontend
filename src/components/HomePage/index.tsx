import React, { FunctionComponent } from 'react';
import { useRecoilValue } from "recoil";
import NextMeeting from './types/NextMeeting.model';

import HomeTemplate from './templates/HomeTemplate';

import { readNextMeetings, readTheNearestMeeting } from './selectors/nextMeetings';

const HomePage: FunctionComponent = () => {
   const nearestMeetings: Array<NextMeeting> = useRecoilValue(readNextMeetings);
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
