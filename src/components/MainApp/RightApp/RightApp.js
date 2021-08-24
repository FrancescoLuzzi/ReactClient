import React from 'react';
import DisplayState from '../../commons/DisplayState';
import ScontrDisplayer from './components/ScontrDisplayer';
import GraphDisplayer from './components/GraphDisplayer';

function RightApp(props){
    return(
        <div className="rightApp">
            <DisplayState>
                <GraphDisplayer/>
                <ScontrDisplayer/>
            </DisplayState>
        </div>
    );
}

export default RightApp;