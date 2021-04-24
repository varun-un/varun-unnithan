import React from 'react';
import PageTitle from './pageTitle.js';
import { Footer } from './global.js';
import './pages.css';

function education() {
    return (
        <div>
            <div className='education'>
                <PageTitle title='Education' sections={['School', 'Activities']} links={['#school', '#activities']}/>
            </div>
            <Footer top='150%' />
        </div>
    )
}

export default education
