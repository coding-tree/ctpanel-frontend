import React, { FunctionComponent } from 'react';
import { useRecoilValue, useRecoilState } from "recoil";
import { incomingMeetingState, commingMeetingAmountState } from '../store/atoms/nearestMeetings';
import { comingMeetingsState } from '../store/selectors/index';
import NearestMeetingHeader from '../molecules/NearestMeetingHeader';
import NearestMeetingPost from '../molecules/NearestMeetingPost';
import { Meeting, MeetingsArray } from '../models/Meeting';
import { useAPICallsInInterval } from '../hooks/useAPICallsInInterval';

const HomeTemplate: FunctionComponent = () => {
    const comingMeetings: MeetingsArray | [] = useRecoilValue(comingMeetingsState);
    const incomingMeeting: Meeting | null = useRecoilValue(incomingMeetingState);
    const [commingMeetingAmount, updateCommingMeetingAmount] = useRecoilState(commingMeetingAmountState);

    const { apiCallsON, handleApiCalls } = useAPICallsInInterval();

    return (
        <>
            <button onClick={handleApiCalls}>
                {apiCallsON ? 'Wyłącz' : 'Włącz'}  API CALLS co 2 sekundy
            </button>
            {
                incomingMeeting
                ? <NearestMeetingHeader date={incomingMeeting.date} topic={incomingMeeting.topic}/>
                : <div>ładowanie</div>
            }
            <select onChange={(event) => updateCommingMeetingAmount(Number.parseInt(event.target.value))} value={commingMeetingAmount}>
                <option value='3'>3</option>
                <option value='4'>4</option>
                <option value='5'>5</option>
                <option value='6'>6</option>
            </select>
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
