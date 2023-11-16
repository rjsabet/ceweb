import React from 'react';

export const ImageComponent = ({ imageUrl, altText }) => {
    return (
        <div>
            <img src={imageUrl} alt={altText} />
        </div>
    );
}

export default ImageComponent;