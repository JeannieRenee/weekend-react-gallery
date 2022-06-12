import { useState } from 'react';

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
        <form onSubmit={onSubmit}>
            <label>Name:</label>
            <input                
                onChange={(event) => 
                    setNewCharacterName(event.target.value)}
                value={newCharacterName}
            />
            <label>Bio:</label>
            <input
                onChange={(event) => 
                    setNewCharacterBio(event.target.value)}
                value={newCharacterBio}
            />
            <label>Image:</label>
            <input
                onChange={(event) => 
                    setNewCharacterImage(event.target.value)}
                value={newCharacterImage}
            />
            <button
                type="submit"
            > 
                Add Character
            </button>
        </form>
    )
}

export default GalleryForm;