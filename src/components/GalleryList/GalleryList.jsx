function GalleryList ({galleryList, likes}) {
    console.log('galleryList:', galleryList)

    return(
        <div className="flex-container">
            {/* map over each item in gallery and append to the dom */}
            {galleryList.map(picture => (
                <div>
                    <img src={picture.path}/> 
                    <button onClick={() => {likes(picture.id)}} key={picture.id}>like!</button>
                    <p>This picture has {picture.likes} likes!</p>
                </div>
            ))}
        </div>
    )
}

export default GalleryList; 