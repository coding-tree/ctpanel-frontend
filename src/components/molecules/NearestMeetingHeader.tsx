import React, { FunctionComponent } from 'react';

interface HeaderModel {
    date: number;
    topic: string;
};

const NearestMeetingHeader: FunctionComponent<HeaderModel> = ({date, topic}) => (
    <>
        <header>
            <p>
                NAJBLIŻSZE SPOTKANIE
            </p>
            <p>
                {date}
            </p>
            <p>
                {topic}
            </p>
        </header>
    </>
);

export default NearestMeetingHeader;