import React, { useState, useEffect, FunctionComponent } from 'react';

import { NearestMeetingsModel, TheNearestMeetingsModel } from 'types/NearestMeetings.model';

import getNearestMeetings from 'api/getNearestMeetings';

import HomeTemplate from 'templates/HomeTemplate';

const filterTheNearestMeetingForHeader = (nearestMeetings: NearestMeetingsModel[]): TheNearestMeetingsModel => {
   return nearestMeetings[0];
};

const HomePage: FunctionComponent = () => {
   const [nearestMeetings, setNearestMeetings] = useState<NearestMeetingsModel[]>();
   const [theNearestMeeting, setTheNearestMeeting] = useState<TheNearestMeetingsModel>();
   
   useEffect(() => {
      getNearestMeetings<NearestMeetingsModel[]>()
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