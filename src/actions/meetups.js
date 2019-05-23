import actionTypes from "./actionTypes";

export const display_meetups = meetups => {
    console.log("meetup data", meetups);
    return {
        type: actionTypes.MEETUPS,
        payload: [...meetups]
    }
}