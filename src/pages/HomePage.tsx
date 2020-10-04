import React, { useState, useEffect, FunctionComponent } from 'react';

import NearestMeetingsModel from 'types/NearestMeetings.model';

import HomeTemplate from 'templates/HomeTemplate';



async function getNearestMeetings<T>(): Promise<T> {
   const response = await fetch(`https://api.ctpanel.pl/meetings/last?amount=3`, { credentials: 'include' });
   const body = await response.json();
   return body;
};

const HomePage: FunctionComponent = () => {
   const [nearestMeetings, setNearestMeetings] = useState<NearestMeetingsModel[]>([]);
   console.log(nearestMeetings);
   useEffect(() => {
      getNearestMeetings<NearestMeetingsModel[]>()
      .then((receivedLastMeets) => setNearestMeetings(receivedLastMeets));
   }, []);

   return (
      <HomeTemplate nearestMeetings={nearestMeetings}/>
   );
};

export default HomePage;