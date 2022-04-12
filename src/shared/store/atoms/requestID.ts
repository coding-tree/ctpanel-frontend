import { atomFamily } from "recoil";

export const requestIDState = atomFamily({
    key: 'requestIDState',
    default: 0 as number,
});
