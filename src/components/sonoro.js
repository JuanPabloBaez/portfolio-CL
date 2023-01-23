import React from "react";
import ReactPlayer from 'react-player';
import sonidoBackground from '../images/fondo_sonido.mp4';


const Sonoro = ({sonidos}) => {
   
    return(
        <div className="sonoro-body">
        <video className="background-video" loop autoPlay muted playsInline >
              <source src={sonidoBackground} type="video/mp4" />    
            </video>
        
        {sonidos.map((item, index)=>{
            return (
                <ReactPlayer
                    key={index}
                    className="sonoro-player"
                    url={item}
                    responsive="true"
                    width="80%"
                    height="12vh"
                    config={{
                        soundcloud: {
                            options:{
                            download: false,
                            sharing: true,
                            show_artwork: false,
                            show_user: false,
                            color: "##36ff17"}
                        }
                    }}
                />
            )
        })}

        </div>
        
    )
}

export default Sonoro;