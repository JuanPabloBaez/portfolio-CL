import React from "react";
import ReactPlayer from 'react-player';


const Documental = ({documental, video}) => {
    return(
        <div className="documental-body">
            <h2>Documental</h2>
            <h4 className="patrocinio">El catalogo online completo disponible en beatkino.com</h4>
            {
                documental.map((item, index) => {
                    if (item.fields.link) {
                        return(
                            <div className="video-container" key={index}>
                                <ReactPlayer 
                                className="page-video"
                                url={item.fields.link}
                                controls={true}
                                responsive="true"
                                width="100%"
                                height="50vh"
                                /> 
                                <h3>{item.fields.title}</h3>
                                <p>{item.fields.description}</p>
                            </div>
                        )
                    } return null
                }) 
            }

            <h2>Video</h2>
            {
                video.map((item, index) => {
                    if (item.fields.link) {
                        return(
                            <div className="video-container" key={index}>
                                <ReactPlayer 
                                className="page-video"
                                url={item.fields.link}
                                controls={true}
                                responsive="true"
                                width="100%"
                                height="50vh"
                                config={{ 
                                    vimeo: {
                                        playerOptions:{
                                            height: "100%",
                                            width:"100%",
                                            responsive: "false",
                                            
                                            
                                        }
                                    }
                                }}
                                    /> 
                            <h3>{item.fields.title}</h3>
                            <p>{item.fields.description}</p>
                            </div>
                        )
                    } return null
            }) 
            } 
        </div>
        
    )
}

export default Documental;