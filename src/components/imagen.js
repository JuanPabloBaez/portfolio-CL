import React, { useState, useEffect } from "react";
/* import Gallery from "react-photo-gallery"; */
/* import Carousel, { Modal, ModalGateway } from "react-images"; */




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
          caption: item.fields.caption
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
         caption: item.fields.caption
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
    }, [images])


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
    }
             
    console.log(galleryPic)
  return (
    <div className="image-body">
        <button onClick={handleGallery} >{images===collages ? <p><b>Gráfica</b> / Fototgrafía</p>: <p>Gráfica / <b>Fototgrafía</b> </p>}</button>

        {galleryPic.map((pic, index) => {
          return(
          <img className="gallery-img" src={pic.src} alt={pic.caption} />
          )
       })}
        
    </div>
  )
}

export default Imagen;