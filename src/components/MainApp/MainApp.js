import React from 'react';
import LeftMenu from './LeftMenu/LeftMenu';
import RightApp from './RightApp/RightApp';
import DisplayState from '../commons/DisplayState';

function MainApp(props){

    return(
        <div className="mainApp">
            
            <DisplayState>
                <LeftMenu Axios={props.Axios}/>
            </DisplayState>
            
            <RightApp Axios={props.Axios}/>
            
        </div>
    );
}

export default MainApp;