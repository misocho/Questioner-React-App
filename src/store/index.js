import React from 'react';
import { createStore, combineReducers } from 'redux';
import { reducers } from '../../src/reducers/reducers.js';
import { messageReducer } from '../reducers/messageReducer';
import { meetupsReducer } from '../reducers/meetupsReducer';


export const store = createStore(
    combineReducers({
        state: reducers,
        state2: reducers,
        messageBox: messageReducer,
        meetups: meetupsReducer
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);