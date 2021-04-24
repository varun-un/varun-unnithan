import React from 'react';

function pageSection(props) {
    return (
        <div className='pageSection'>
            <h2 className='sectionTitle'>{props.section}</h2>
            {props.children}
        </div>
    )
}

export default pageSection
