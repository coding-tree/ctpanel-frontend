import React, { FunctionComponent, useEffect } from 'react';
import HomeTemplate from './templates/HomeTemplate';
import useGetIncomingMeeting from './hooks/useGetIncomingMeeting'

const HomePage: FunctionComponent = () => {
   const getIncomingMeeting = useGetIncomingMeeting();

   useEffect(() => {
      getIncomingMeeting();
   });

   return (
      <HomeTemplate />
   );
};

export default HomePage;
