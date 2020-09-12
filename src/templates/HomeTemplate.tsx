import React, { FunctionComponent } from 'react';

import NearestMeeting from 'components/molecules/NearestMeeting';

interface NearestMeeting {
    author: string,
    title: string,
    date: Date,
    description: string,
    usableLinks?: Array<string>
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
                nearestMeetings.map(nearestMeeting => <NearestMeeting {...nearestMeeting}/>)
            }
        </section>
    </>
);

export default HomeTemplate;