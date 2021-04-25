import React, { FunctionComponent } from 'react';

import NextMeeting from '../types/NextMeeting.model';

import NearestMeetingHeader from '../molecules/NearestMeetingHeader';
import NearestMeetingPost from '../molecules/NearestMeetingPost';

interface NearestMeetingsProps {
    nearestMeetings: Array<NextMeeting>;
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