import React, { FunctionComponent } from 'react';
import { useComingMeetingsState } from '../../store/selectors/comingMeetingsState';
import { useIncomingMeetingState } from '../../store/selectors/incomingMeetingState';
import NearestMeetingHeader from '../molecules/NearestMeetingHeader';
import NearestMeetingPost from '../molecules/NearestMeetingPost';

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
