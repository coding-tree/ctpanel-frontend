import React, { useState, useEffect, FunctionComponent } from 'react';

import NearestMeeting from 'types/NearestMeetings.model';

import getNearestMeetings from 'api/getNearestMeetings';

import HomeTemplate from 'templates/HomeTemplate';

const filterTheNearestMeetingForHeader = (nearestMeetings: NearestMeeting[]): NearestMeeting => {
   return nearestMeetings[0];
};

const HomePage: FunctionComponent = () => {
   const [nearestMeetings, setNearestMeetings] = useState<NearestMeeting[]>();
   const [theNearestMeeting, setTheNearestMeeting] = useState<NearestMeeting>();
   
   useEffect(() => {
      getNearestMeetings<NearestMeeting[]>()
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