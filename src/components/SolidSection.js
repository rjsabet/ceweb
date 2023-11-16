import React from "react";

export const SolidSection = ({ 
    imageUrl, 
    altText,
    headerText,
    textBody,
    headerTextSize,
    textBodySize, 
    Button, 
    ButtonRoute, 
    setbackgroundColor, 
    setTextColor, 
    sectionHeight,
    settextAlign,
    setDecorative,
    }) => {
    return (
        <section style={{ 
            backgroundColor: setbackgroundColor, 
            color: setTextColor, 
            height: sectionHeight,
            paddingLeft: 100,
            justifyItems: 'center',
            textAlign: settextAlign
            }}>
            <div>
                <img src={imageUrl} alt={altText}/>
            </div>
            <div>
                <h2 style={{ fontSize: 30, fontWeight: '700', fontFamily: 'futura', backgroundColor: 'red', width: '50%' }}>{headerText}</h2>
                <p style={{ fontSize: 17, fontWeight: '500', fontFamily: 'futura', backgroundColor: 'red', width: '65%' }}>{textBody}</p>
            </div>
        </section>
    );
}

export default SolidSection;