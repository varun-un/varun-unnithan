import React from 'react';
import './pages.css';

function pageTitle(props) {
    
    return (
        <div className='pageTitleDiv flex-direction'>
            <div className='titleFlexL'>
                <div className='bgCircle'></div>
                <h1 className='title'>{props.title}</h1>
            </div>
            <div className='titleFlexR'>
                <p className='jumpTitle'><b>Jump To:</b></p>
                <div className='jumpBox'>
                    {props.sections.map((section, index) => (
                        <div className='jumpItem'>
                            <div className='jumpCircle'></div>
                            <p className='jumpText'><a href={props.links[index]} className='jumpLink'>{section}</a></p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default pageTitle
