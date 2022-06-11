function GalleryItem ({picture, likes}) {
    console.log('in GalleryItem:', picture.id)

    return(
        <div>
            <img src={picture.path}/> 
            <br/>
            <button onClick={() => {likes(picture.id)}} key={picture.id}>like!</button>
            <p>This picture has {picture.likes} likes!</p>
        </div>
    )
}

export default GalleryItem;