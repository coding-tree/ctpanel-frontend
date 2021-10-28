import React, { FunctionComponent } from 'react';
import { useRecoilValue, useRecoilState } from "recoil";
import { incomingMeetingState, commingMeetingAmountState } from '../store/atoms/nearestMeetings';
import { comingMeetingsState } from '../store/selectors/index';
import NearestMeetingHeader from '../molecules/NearestMeetingHeader';
import NearestMeetingPost from '../molecules/NearestMeetingPost';
import { Meeting, MeetingsArray } from '../models/Meeting';
import useRecoilInterval from '../../../shared/hooks/useRecoilInterval';
import { apiCallID } from '../store/atoms/nearestMeetings';

const HomeTemplate: FunctionComponent = () => {
    const comingMeetings: MeetingsArray | [] = useRecoilValue(comingMeetingsState);
    const incomingMeeting: Meeting | null = useRecoilValue(incomingMeetingState);
    const [commingMeetingAmount, updateCommingMeetingAmount] = useRecoilState(commingMeetingAmountState);

    const [state, setIntervalTime, isIntervalActive, setIntervalStatus] = useRecoilInterval(
        apiCallID,
        (setState: any) => {
          setState((state: any) => state + 1);
        },
        5000
      );
      
      const stop = () => {
        setIntervalStatus(false);
      };
    
      const setTime = () => {
        setIntervalStatus(true)
      }

    return (
        <>
            <button onClick={setTime}>Włącz</button>
            <button onClick={stop}>Wyłącz</button>
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
