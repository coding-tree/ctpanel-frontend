import React, { FunctionComponent } from 'react';

import HomeTemplate from 'templates/HomeTemplate';

const fakeData = [
   {
      author: "Damian",
      title: "Tytuł pierwszy",
      date: new Date(1995,11,16),
      description: "Opis pierwszy"
   },
   {
      author: "Paweł",
      title: "Tytuł drugi",
      date: new Date(1925,11,11),
      description: "Opis drugi",
      usableLinks: [
         "www.w3s.com"
      ]
   },
   {
      author: "Kazimierz",
      title: "Tytuł trzeci",
      date: new Date(1995,8,17),
      description: "Opis trzeci",
      usableLinks: [
         "www.w3s.com",
         "www.facebook.com"
      ]
   }
];

const HomePage: FunctionComponent = () => (
   <HomeTemplate nearestMeetings={fakeData}/>
);

export default HomePage;