import React, { useState, useEffect, FunctionComponent } from 'react';

import HomeTemplate from 'templates/HomeTemplate';

interface NearestMeetingsResult {
   date: number,
   description: string,
   duration: string,
   leader: string,
   meetingHref: string,
   tags: Array<string>,
   topic: string,
   usefulLinks: Array<string>,
   _id: string
};

async function getNearestMeetings<T>(): Promise<T> {
   const response = await fetch(`https://api.ctpanel.pl/meetings/last?amount=3`, { credentials: 'include' });
   const body = await response.json();
   return body;
};

const HomePage: FunctionComponent = () => {
   const [nearestMeetings, setNearestMeetings] = useState<NearestMeetingsResult[]>([]);
   console.log(nearestMeetings);
   useEffect(() => {
      getNearestMeetings<NearestMeetingsResult[]>()
      .then((receivedLastMeets) => setNearestMeetings(receivedLastMeets));
   }, []);

   return (
      <HomeTemplate nearestMeetings={nearestMeetings}/>
   );
};

export default HomePage;