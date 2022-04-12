import React, { useState, useEffect } from "react";
import { Gallery } from 'react-grid-litebox';
import 'react-grid-litebox/dist/index.css';
/* import ScrollToTop from './ScrollToTop.js' */



const Imagen = ({images}) => {
    const [galleryPic, setGalleryPic] = useState([]);
    const [galleryName, setGalleryName] = useState("")
    

    let collages = images.filter((item)=> item.fields.tag==="collage" ).map((item)=>{
       return (
         { 
          src: item.fields.src.fields.file.url, 
          alt: item.fields.caption
        }
      )
    });

    let photos = images.filter((item)=> item.fields.tag==="foto" ).map((item)=>{
      return (
        { 
         src: item.fields.src.fields.file.url, 
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
        <button onClick={handleGallery} >{galleryName==="photos" ? <p><b>FOTOGRAFÍA</b> / COLLAGE</p>: <p>FOTOGRAFÍA / <b>COLLAGE</b> </p>}</button>

        
        <Gallery images={galleryPic} thumbnailSize={{height: 350, width:350}}/>
        
       {/*  <ScrollToTop /> */}
        
    </div>
  )
}

export default Imagen;