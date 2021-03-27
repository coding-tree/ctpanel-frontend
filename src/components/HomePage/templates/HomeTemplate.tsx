import React, { FunctionComponent } from 'react';

import NearestMeeting from '../types/NextMeeting.model';

import NearestMeetingHeader from '../molecules/NearestMeetingHeader';
import NearestMeetingPost from '../molecules/NearestMeetingPost';

interface NearestMeetingsProps {
    nearestMeetings: Array<NearestMeeting>;
    theNearestMeeting: NearestMeeting;
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