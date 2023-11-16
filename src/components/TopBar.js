import React from 'react';
import ImageComponent from './ImageComponent';
import MenuIcon from '@mui/icons-material/Menu';



export const TopBar = () => {
    return(
        <div className='TopBar'>
            <div>
                <ImageComponent imageUrl={"../black_backgrounf.png"}/>
            </div>
            <div className='MenuIcon'>
              
            </div>
        </div>
    )
}

export default TopBar;