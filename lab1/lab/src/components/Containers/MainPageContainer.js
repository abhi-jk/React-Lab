import React from 'react';
import Header from '../Header';
import RecentlyAdded from '../RecentlyAdded';

export default function MainPageContainer(){
    return(
        <React.Fragment>
            <Header/>
            <RecentlyAdded/>
        </React.Fragment>
    );
}