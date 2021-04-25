import React from 'react';
import './pages.css';

function pageTitle(props) {
    
    return (
        <div className='pageTitleDiv flex-direction' id='e'>
            <div className='titleFlexL'>
                <div className='bgCircle'></div>
                <h1 className='title'>{props.title}</h1>
            </div>
            <div className='titleFlexR'>
                <div className='jumpBox'>
                    <p className='jumpTitle'>Jump To:</p>
                    {props.sections.map((section, index) => (
                        <div className='jumpItem' key={'x'+index}>
                            <div className='jumpCircle' key={'y'+index}></div>
                            <p className='jumpText' key={'z'+index}><a href={props.links[index]} className='jumpLink'>{section}</a></p>
                        </div>
                    ))}
                </div>
            </div>
            <div className='stars'></div>
            <div className='stars2'></div>
            <div className='stars starOffset'></div>
        </div>
    )
}

export default pageTitle
