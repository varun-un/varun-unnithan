import React from 'react'

function sectionBody(props) {
    return (
        <div className='cardContainer'>
            <div className='card'>
                {props.children}
            </div>
        </div>
    )
}

export default sectionBody
