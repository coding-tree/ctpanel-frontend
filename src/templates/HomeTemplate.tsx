import React, { FunctionComponent } from 'react';

import NearestMeetingsModel from 'types/NearestMeetings.model';

import NearestMeeting from 'components/molecules/NearestMeeting';

interface NearestMeetingsProps {
    nearestMeetings: Array<NearestMeetingsModel>
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