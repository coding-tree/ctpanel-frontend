import React, { FunctionComponent } from 'react';

import NearestMeeting from 'components/molecules/NearestMeeting';

interface NearestMeeting {
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

interface NearestMeetingsProps {
    nearestMeetings: Array<NearestMeeting>
};

const HomeTemplate: FunctionComponent<NearestMeetingsProps> = ({ nearestMeetings }) => (
    <>
        <header>
            NAJBLIŻSZE SPOTKANIE
        </header>
        <section>
            {
                nearestMeetings.map(nearestMeeting => <NearestMeeting key={nearestMeeting._id} {...nearestMeeting}/>)
            }
        </section>
    </>
);

export default HomeTemplate;