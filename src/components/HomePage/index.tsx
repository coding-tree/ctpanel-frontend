import React, { FunctionComponent, useEffect } from 'react';
import HomeTemplate from './templates/HomeTemplate';
import useGetComingMeetings from './hooks/useGetComingMeetings'
import useGetIncomingMeeting from './hooks/useGetIncomingMeeting'

const HomePage: FunctionComponent = () => {
   const getComingMeetings = useGetComingMeetings('3');
   const getIncomingMeeting = useGetIncomingMeeting();

   useEffect(() => {
      getComingMeetings();
      getIncomingMeeting();
   });

   return (
      <HomeTemplate />
   );
};

export default HomePage;
