import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import * as React from 'react';
import Button from '@mui/material/Button';

function GalleryForm({onCreateCharacter}) {
    const [newCharacterName, setNewCharacterName] = useState('');
    const [newCharacterBio, setNewCharacterBio] = useState('');
    const [newCharacterImage, setNewCharacterImage] = useState('');

    const onSubmit = (evt) => {
        evt.preventDefault();
        onCreateCharacter({
            name: newCharacterName,
            bio: newCharacterBio,
            image: newCharacterImage
        });
    };

    return(
        <Box
        component="form"
        sx={{
            '& > :not(style)': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
        onSubmit={onSubmit}
        >
            <TextField 
                id="outlined-basic" 
                label="Name:" 
                variant="outlined"                 
                onChange={(event) => 
                    setNewCharacterName(event.target.value)}
                value={newCharacterName}
            />
            <TextField 
                id="outlined-basic" 
                label="Bio:" 
                variant="outlined"   
                onChange={(event) => 
                    setNewCharacterBio(event.target.value)}
                value={newCharacterBio}
            />
            <TextField 
                id="outlined-basic" 
                label="Image URL:" 
                variant="outlined"   
                onChange={(event) => 
                    setNewCharacterImage(event.target.value)}
                value={newCharacterImage}
            />
            <Button
                id= "submitButton"
                type="submit"
                variant="contained"
                size="large"
            > 
                Add Character
            </Button>
        </Box>
    )
}

export default GalleryForm;