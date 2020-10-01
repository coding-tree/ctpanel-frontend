import React, { useState, useEffect, FunctionComponent } from 'react';

import HomeTemplate from 'templates/HomeTemplate';

interface NearestMeetingsResult {
   date: number,
   description: string,
   duration: string,
   leader: string,
   meetingHref: string,
   //tags: Array<string>,
   topic: string,
   //usefulLinks: Array<string>,
   _id: string
};

async function getNearestMeetings<T>(): Promise<T> {
   const response = await fetch(`https://api.ctpanel.pl/meetings/last?amount=3`, { credentials: 'include' });
   const body = await response.json();
   return body;
};

const HomePage: FunctionComponent = () => {
   const [nearestMeetings, setNearestMeetings] = useState<NearestMeetingsResult[]>([]);

   useEffect(() => {
      getNearestMeetings<NearestMeetingsResult[]>()
      .then((receivedLastMeets) => setNearestMeetings(receivedLastMeets));
   }, []);

   return (
      <HomeTemplate nearestMeetings={nearestMeetings}/>
   );
};

export default HomePage;

// const fakeData = [
//    {
//       author: "Damian",
//       title: "Tytuł pierwszy",
//       date: new Date(1995,11,16),
//       description: "Opis pierwszy"
//    },
//    {
//       author: "Paweł",
//       title: "Tytuł drugi",
//       date: new Date(1925,11,11),
//       description: "Opis drugi",
//       usableLinks: [
//          "www.w3s.com"
//       ]
//    },
//    {
//       author: "Kazimierz",
//       title: "Tytuł trzeci",
//       date: new Date(1995,8,17),
//       description: "Opis trzeci",
//       usableLinks: [
//          "www.w3s.com",
//          "www.facebook.com"
//       ]
//    }
// ];