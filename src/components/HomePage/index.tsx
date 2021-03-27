import React, { useState, useEffect, FunctionComponent } from 'react';

import NextMeeting from './types/NextMeeting.model';

import getNextMeetings from './api/getNextMeetings';

import HomeTemplate from './templates/HomeTemplate';

const filterTheNearestMeetingForHeader = (nearestMeetings: NextMeeting[]): NextMeeting => {
   return nearestMeetings[0];
};

const HomePage: FunctionComponent = () => {
   const [nearestMeetings, setNearestMeetings] = useState<NextMeeting[]>();
   const [theNearestMeeting, setTheNearestMeeting] = useState<NextMeeting>();
   
   useEffect(() => {
      getNextMeetings()
      .then((receivedLastMeets) => {
         setNearestMeetings(receivedLastMeets);
         setTheNearestMeeting(filterTheNearestMeetingForHeader(receivedLastMeets));
      });
   }, []);

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