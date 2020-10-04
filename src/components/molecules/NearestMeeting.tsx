import React, { FunctionComponent } from 'react';

import NearestMeetingsModel from 'types/NearestMeetings.model';

const NearestMeeting: FunctionComponent<NearestMeetingsModel> = ({date, description, duration, leader, meetingHref, topic, _id}) => (
    <article key={_id}>
        <header>
            <p className="author">
                {leader}
            </p>
            <h1 className="title">
                {topic}
            </h1>
            <p className="date">
                {/* {date} */}
            </p>
        </header>
        <section>
            <p className="description">
                {description}
            </p>
            <h2 className="usableLink"></h2>
            {/* {
                usableLinks
                ?
                    <ul>
                        {
                            usableLinks.map(link => (
                                <li>
                                    <a>{link}</a>
                                </li>
                            ))
                        }
                    </ul>
                :   <p>Brak przydatnych linków</p>
            } */}
        </section>
    </article>
);

export default NearestMeeting;