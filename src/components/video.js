import React from "react";


const Video = ({video}) => {
    


   return (
       <>

       
       {
        video.map((item, index) => {
                if (item.fields.link) {
                return(
                    <div className="video-container" key={index}>
                    <h2>{item.fields.title}</h2>
                    <p>{item.fields.description}</p>
                    </div>
                )
                } return null
           }) 
        } 
        </>
   )
    
}

export default Video;