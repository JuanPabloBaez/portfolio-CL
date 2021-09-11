import React, { useState, useEffect } from "react";
import { Gallery } from 'react-grid-litebox';
import 'react-grid-litebox/dist/index.css';




const Imagen = ({images}) => {
    const [galleryPic, setGalleryPic] = useState([]);
    const [galleryName, setGalleryName] = useState("")
    
    let collages = images.filter((item)=> item.fields.tag==="collage" ).map((item)=>{
       return (
         { 
          src: item.fields.src.fields.file.url, 
          thumbnail: item.fields.src.fields.file.url,
          thumbnailWidth: 271,
          thumbnailHeight: 320,
          alt: item.fields.caption
        }
      )
    });

    let photos = images.filter((item)=> item.fields.tag==="foto" ).map((item)=>{
      return (
        { 
         src: item.fields.src.fields.file.url, 
         thumbnail: item.fields.src.fields.file.url,
         thumbnailWidth: 271,
         thumbnailHeight: 320,
         alt: item.fields.caption
       }
     )
   });
    

    useEffect(() => {
      function setImages () {
        setGalleryPic(photos)
        setGalleryName("photos")
        return
      }
      setImages();
    }, [images]) // eslint-disable-line react-hooks/exhaustive-deps


    function handleGallery () {
      if (galleryName==="photos"){
        setGalleryPic(collages)
        setGalleryName("collages")
        return
      } else {
        setGalleryPic(photos)
        setGalleryName("photos")
        return
      }
    };
          
    
  return (
    <div className="image-body">
        <button onClick={handleGallery} >{galleryName==="collages" ? <p><b>COLLAGE</b> / FOTOGRAFÍA</p>: <p>COLLAGE / <b>FOTOGRAFÍA</b> </p>}</button>

        
        <Gallery images={galleryPic} thumbnailSize={{height: 350, width:350}}/>
        
        
        {/* {galleryPic.map((pic, index) => {
          return(
          <img className="gallery-img" key={index} src={pic.src} alt={pic.caption} />
          )
       })} */}
        
    </div>
  )
}

export default Imagen;