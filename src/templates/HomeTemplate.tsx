import React, { FunctionComponent } from 'react';

import NearestMeeting from 'types/NearestMeetings.model';

import NearestMeetingHeader from 'components/molecules/NearestMeetingHeader';
import NearestMeetingPost from 'components/molecules/NearestMeetingPost';

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