import React from "react";


const Talleres = ({posts}) => {
    return(
        <div className="taller-body">
        {posts.map((post, index) =>{
            console.log(post)
            if (post.fields.title) {
            return(
            <div className="post-container" key={index}>
                <img src={post.fields.picture.fields.file.url} alt=""/>
                <h2>{post.fields.title}</h2>
                <h4>{post.fields.date}</h4>
                <p>{post.fields.description.content[0].content[0].value}</p>
            </div>)
            }return null
        })}
        </div>
    )
}

export default Talleres;