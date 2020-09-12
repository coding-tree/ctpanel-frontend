import React, { FunctionComponent } from 'react';

type NearestMeetingProps = {
    author: string,
    title: string,
    date: Date,
    description: string,
    usableLinks?: Array<string>
};

const NearestMeeting: FunctionComponent<NearestMeetingProps> = ({author, title, date, description, usableLinks}) => (
    <article>
        <header>
            <p className="author">
                {author}
            </p>
            <h1 className="title">
                {title}
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
            {
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
            }
        </section>
    </article>
);

export default NearestMeeting;