import React, {useState } from 'react'

function SectionBody(props) {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpand = () => {
        setIsExpanded(prevState => !prevState);
    };

    const { additionalImages } = props; // Expecting an array of image filenames

    return (
        <div className='cardContainer'>
            <div className='card'>
                {props.children}
                
                {/* Toggle Icon */}
                {additionalImages &&
                    <div className='toggleContainer'>
                        <img 
                            src={require('../static/image.png')} 
                            className='toggleIcon' 
                            title={isExpanded ? "Collapse Images" : "Expand Images"} 
                            onClick={toggleExpand}
                            alt={isExpanded ? "Collapse" : "Expand"}
                            tabIndex="0"
                        />
                    </div>
                }

                {/* Conditionally Render Additional Images */}
                {isExpanded && additionalImages && (
                    <div className='additionalImages'>
                        {additionalImages.map((img, index) => (
                            <img 
                                key={index} 
                                src={img} 
                                className='additionalImage' 
                                alt={`Additional ${index + 1}`}
                            />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

export default SectionBody;
