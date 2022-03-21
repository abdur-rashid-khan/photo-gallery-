import React from 'react';

import './Photo.css'

const Photo = (props) => {
   const {photographer,photographer_url,alt}=props.data;
   return (
      <div className='photos-items'>
         <div className='img'>
            <img className='imgSize' src={props.data.src.large} alt="" />
         </div>
         <div className="author-text">
            <a href={photographer_url} >Photographer Name : <strong>{photographer}</strong></a>
            <p>Location : {alt}</p>
         </div>
      </div>
   );
};

export default Photo;