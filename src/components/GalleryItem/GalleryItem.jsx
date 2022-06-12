import { useState} from 'react';

import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import FavoriteIcon from '@mui/icons-material/Favorite';

function GalleryItem ({picture, likes, trash}) {

    const [display, setDisplay] = useState(true);

    const toggleDisplay = () => {
        setDisplay(!display);
    }

    return(
        <Card sx={{ 
            maxWidth: 250, 
            minWidth: 250,  
            maxHeight: 375, 
            minHeight: 375 
        }}>
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
        <p 
            className="description-text" 
            onClick={() => {toggleDisplay(picture.id)}}
        >
            {picture.description}  
        </p>
        }
        </CardActionArea>
        <p 
        className="name-text">
            {picture.name}
        </p>
        <span>
                <IconButton 
                    onClick={() => {likes(picture.id)}} 
                    key={picture.id}
                    color="primary"
                >
                    {picture.likes} <FavoriteIcon />
                </IconButton>
                <IconButton
                    onClick={() => {trash(picture.id)}} 
                    aria-label="delete"
                    color="error"
                >
                    <DeleteIcon />
                </IconButton>
        </span>
    </Card>
  );
}

export default GalleryItem;