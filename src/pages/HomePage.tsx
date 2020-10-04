import React, { useState, useEffect, FunctionComponent } from 'react';

import NearestMeetingsModel from 'types/NearestMeetings.model';

import getNearestMeetings from 'api/getNearestMeetings';

import HomeTemplate from 'templates/HomeTemplate';

const HomePage: FunctionComponent = () => {
   const [nearestMeetings, setNearestMeetings] = useState<NearestMeetingsModel[]>([]);

   useEffect(() => {
      getNearestMeetings<NearestMeetingsModel[]>()
      .then((receivedLastMeets) => setNearestMeetings(receivedLastMeets));
   }, []);

   return (
      <HomeTemplate nearestMeetings={nearestMeetings}/>
   );
};

export default HomePage;