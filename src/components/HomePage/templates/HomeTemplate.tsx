import React, { FunctionComponent } from 'react';
import { useRecoilValue } from "recoil";
import { comingMeetingsState, incomingMeetingState } from '../atoms/nearestMeetings';
import NearestMeetingHeader from '../molecules/NearestMeetingHeader';
import NearestMeetingPost from '../molecules/NearestMeetingPost';
import { MeetingState, NextThreeMeetingsArrayState } from '../models/Meeting';

const HomeTemplate: FunctionComponent = () => {
    const comingMeetings: NextThreeMeetingsArrayState = useRecoilValue(comingMeetingsState);
    const incomingMeeting: MeetingState = useRecoilValue(incomingMeetingState);

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
    );
}
export default HomeTemplate;
