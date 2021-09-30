import React from 'react';
import ReactDOM from 'react-dom';
import { SpeechProvider } from '@speechly/react-client';

import { Provider } from './context/context';
import App from './App';
import './index.css';

ReactDOM.render(
    <SpeechProvider appId="8fa04513-110c-462e-950b-5a336a8b339f" language="en-US">
        <Provider>
            <App />
        </Provider>
    </SpeechProvider>,
    document.getElementById('root')
);