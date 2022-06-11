import { useState} from 'react';


function GalleryItem ({picture, likes}) {
    console.log('in GalleryItem:', picture.id)

const [display, setDisplay] = useState(true);

const toggleDisplay = () => {
    console.log('clicked a picture');
    setDisplay(!display);
}

    return(

        <div>
            {
            display ? 
            <img src={picture.path} onClick={() => {toggleDisplay(picture.id)}}/>  :     
            picture.description
            }
            <br/>
            <button onClick={() => {likes(picture.id)}} key={picture.id}>like!</button>
            <p>This picture has {picture.likes} likes!</p>
        </div>
        
        // <div>
        //     <img src={picture.path} onClick={() => {toggleDisplay(picture.id)}}/> 
        //     <br/>
        //     <button onClick={() => {likes(picture.id)}} key={picture.id}>like!</button>
        //     <p>This picture has {picture.likes} likes!</p>
        // </div>
    )
}

export default GalleryItem;