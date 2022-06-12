import { useState} from 'react';

import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Typography from '@mui/material/Typography';

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
        <Typography 
            className="description-text" 
            onClick={() => {toggleDisplay(picture.id)}}
            variant="body1"
            gutterBottom 
            component="div"
            sx={{ 
                maxWidth: 250, 
                minWidth: 250,  
                maxHeight: 250, 
                minHeight: 250 
            }}
        >
            {picture.description}  
        </Typography>
        }
        </CardActionArea>
        <Typography 
            className="name-text" 
            variant="h5"
            gutterBottom 
            component="div"
        >
            {picture.name}
        </Typography>
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