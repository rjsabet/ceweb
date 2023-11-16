import React from "react";
import ImageComponent from "./ImageComponent";

export const ImageSection = ({ 
    headerText, 
    Button, 
    ButtonText, 
    ButtonRoute, 
    setBackgroundImg, 
    setTextColor,
    sectionHeight,
    setbackgroundSize,
    setbackgroundPos,
    settextAlign,
    textBody,
    headerTextSize,
    textBodySize, 
    setbackgroundColor,
    displayText,
    }) => {
    return (
        <section style={{ 
         backgroundImage: `url(${setBackgroundImg})`,
         backgroundColor: setbackgroundColor,
         color: setTextColor,
         height: sectionHeight,
         backgroundPosition: setbackgroundPos || 'top',
         backgroundSize: setbackgroundSize || 'cover',
         backgroundRepeat: 'no-repeat',
         textAlign: settextAlign,
         paddingLeft: 100,
         width: '100vw',
         display: "flex"
         }}>
            <div style={{display: displayText}}>
                <h2 style={{ fontSize: 30, fontWeight: '700', fontFamily: 'futura', width: '50%' }}>{headerText}</h2>
                <p style={{ fontSize: 17, fontWeight: '500', fontFamily: 'futura', width: '65%' }}>{textBody}</p>
            </div>
        </section>
    );
}


export default ImageSection;