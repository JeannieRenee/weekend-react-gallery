// import GalleryItem
import GalleryItem from '../GalleryItem/GalleryItem'; 

function GalleryList ({galleryList, likes, trash}) {
    return(
        <div className="flex-container">
            {/* map over each item in gallery and end to GalleryItem */}
            {galleryList.map(picture => (
                <GalleryItem 
                    key={picture.id} 
                    picture={picture} 
                    likes={likes} 
                    trash={trash}
                />
            ))}
        </div>
    )
}

export default GalleryList; 