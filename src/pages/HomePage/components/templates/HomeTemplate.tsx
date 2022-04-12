import React, { FunctionComponent } from 'react';
import { useComingMeetingsState } from 'pages/HomePage/hooks/useComingMeetings';
import { useIncomingMeetingState } from 'pages/HomePage/hooks/useIncomingMeeting';
import NearestMeetingHeader from 'pages/HomePage/components/molecules/NearestMeetingHeader';
import NearestMeetingPost from 'pages/HomePage/components/molecules/NearestMeetingPost';

const HomeTemplate: FunctionComponent = () => {
    const { comingMeetings } = useComingMeetingsState();
    const { incomingMeeting } = useIncomingMeetingState();

    return (
        <>
            {
                incomingMeeting
                ? <NearestMeetingHeader date={incomingMeeting.date} topic={incomingMeeting.topic}/>
                : <div>ładowanie</div>
            }
            {
                comingMeetings
                ?  (
                    <section>
                        {
                            comingMeetings.map(comingMeetings => <NearestMeetingPost key={comingMeetings._id} {...comingMeetings}/>)
                        }
                    </section>
                )
                : <div>ładownie</div>
            }
        </>
    )
};

export default HomeTemplate;
