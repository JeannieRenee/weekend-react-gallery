import { useState} from 'react';

import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { Button, CardActionArea } from '@mui/material';

function GalleryItem ({picture, likes}) {
    console.log('in GalleryItem:', picture.id)

const [display, setDisplay] = useState(true);

const toggleDisplay = () => {
    console.log('clicked a picture');
    setDisplay(!display);
}

    return(
        <Card sx={{ maxWidth: 250, minWidth: 250,  maxHeight: 375, minHeight: 375 }}>
         <CardActionArea>
        {
        display ? 
        <CardMedia
            component="img"
            height="250"
            image= {picture.path}
            alt= {picture.name}
            onClick={() => {toggleDisplay(picture.id)}}
        /> :
        <p className="description-text"  onClick={() => {toggleDisplay(picture.id)}}>{picture.description}</p>  
        }
        <p className="name-text">{picture.name}</p>
        <Button variant="outlined" 
            onClick={() => {likes(picture.id)}} 
            key={picture.id}
        >
            💙 {picture.likes}
        </Button>
      </CardActionArea>
    </Card>
  );
}

export default GalleryItem;