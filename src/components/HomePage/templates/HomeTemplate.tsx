import React, { FunctionComponent } from 'react';
import { NextMeeting, NextThreeMeetingsArray } from '../models/NextMeeting';

import NearestMeetingHeader from '../molecules/NearestMeetingHeader';
import NearestMeetingPost from '../molecules/NearestMeetingPost';

interface NearestMeetingsProps {
    nearestMeetings: NextThreeMeetingsArray;
    theNearestMeeting: NextMeeting;
};

const HomeTemplate: FunctionComponent<NearestMeetingsProps> = ({ theNearestMeeting, nearestMeetings }) => (
    <>
        <NearestMeetingHeader date={theNearestMeeting.date} topic={theNearestMeeting.topic}/>
        <section>
            {
                nearestMeetings.map(nearestMeetings => <NearestMeetingPost key={nearestMeetings._id} {...nearestMeetings}/>)
            }
        </section>
    </>
);

export default HomeTemplate;