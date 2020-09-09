import React from "react";
import './style.css'

import TextInput from './components/TextInput';
import Publish from './components/Publish';

import {Provider} from 'react-redux';
import store from "./store"

const App = () => (
    <Provider store={store}>
        <div className = "centeredForm">
            <TextInput />
        </div>

        <Publish />
    </Provider>

)
    


export default App;



   