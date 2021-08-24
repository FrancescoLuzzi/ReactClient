import React from 'react';
import LeftMenu from './LeftMenu/LeftMenu';
import RightApp from './RightApp/RightApp';
import DisplayState from '../commons/DisplayState';

function MainApp(props){

    return(
        <div className="mainApp">
            
            <DisplayState>
                <LeftMenu/>
            </DisplayState>
            
            <RightApp/>
            
        </div>
    );
}

export default MainApp;