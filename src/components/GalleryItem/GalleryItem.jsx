import { useState} from 'react';

import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { Button, CardActionArea } from '@mui/material';
import ButtonGroup from '@mui/material/ButtonGroup';

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
            <ButtonGroup size="large" variant="text" aria-label="outlined primary button group">
                <Button 
                    onClick={() => {likes(picture.id)}} 
                    key={picture.id}
                >
                    💙 {picture.likes}
                </Button>
                <Button
                    onClick={() => {trash(picture.id)}} 
                >
                    🗑
                </Button>
            </ButtonGroup>
        </span>
    </Card>
  );
}

export default GalleryItem;