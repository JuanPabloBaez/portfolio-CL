import React, { useState, useEffect } from "react";
import { Gallery } from 'react-grid-litebox';
import 'react-grid-litebox/dist/index.css';



const Imagen = ({foto, collage }) => {
    const [galleryPic, setGalleryPic] = useState([]);
    const [galleryName, setGalleryName] = useState("")
    
   let photos = foto.map((item)=>{
      return (
        { 
          src: item.fields.file.url,
          alt: item.fields.title
        }
      )
    })  
   let collages = collage.filter(item=> item.fields).map((item)=>{
      return (
        { 
          src: item.fields.file.url,
          alt: item.fields.title
        }
      )
    })
  
    
    useEffect(() => {
      function setImages () {
        setGalleryPic(photos)
        setGalleryName("photos")
        return
      }
      setImages();
    }, []) // eslint-disable-line react-hooks/exhaustive-deps


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
        <button onClick={handleGallery} >{galleryName==="photos" ? <p><b>FOTOGRAFÍA</b> / COLLAGE</p>: <p>FOTOGRAFÍA / <b>COLLAGE</b> </p>}</button>
       { galleryPic && <Gallery images={galleryPic} thumbnailSize={{height: 350, width:350}}/>}
    </div>
  )
}

export default Imagen;