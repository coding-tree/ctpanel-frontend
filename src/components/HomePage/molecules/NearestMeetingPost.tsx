import React, { FunctionComponent } from 'react';

import { NextMeeting } from '../models/NextMeeting';

const NearestMeetingPost: FunctionComponent<NextMeeting> = ({date, description, duration, leader, meetingHref, tags, topic, usefulLinks, _id}) => (
    <article key={_id}>
        <header>
            <p className="author">
                {leader}
            </p>
            <h1 className="title">
                {topic}
            </h1>
            <p className="date">
                {date}
            </p>
        </header>
        <section>
            <p className="description">
                {description}
            </p>
            <h2 className="usableLink">
                Przydatne linki ze spotkania
            </h2>
            {
                usefulLinks
                ?
                    <ul>
                        {
                            usefulLinks.map(link => (
                                <li>
                                    <a href="/">{link}</a>
                                </li>
                            ))
                        }
                    </ul>
                :   <p>Brak przydatnych linków</p>
            }
        </section>
    </article>
);

export default NearestMeetingPost;