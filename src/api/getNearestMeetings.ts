export default async function getNearestMeetings<T>(): Promise<T> {
    const response = await fetch(`https://api.ctpanel.pl/meetings/last?amount=3`, { credentials: 'include' });
    const body = await response.json();
    return body;
};