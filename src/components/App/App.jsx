import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios'; 

// import css file
import './App.css';
// import Header 
import Header from '../Header/Header'; 
// import GalleryList
import GalleryList from '../GalleryList/GalleryList'; 
// import GalleryForm 
import GalleryForm from '../GalleryForm/GalleryForm';


function App() {
  let [galleryList, setGalleryList] = useState([]);

  useEffect(() => {
    // kinda like ready now, page load function 
    fetchGallery();
  }, []);

  // function to fetch the gallery data 
  //GET
  const fetchGallery = () => {
    axios({
      url:'/gallery',
      method:'GET'
  }).then((response)=>{
      setGalleryList(response.data)
  }).catch((error)=>{
      console.log('Get require failed', error)
  })
}

  //function to tally likes
  //PUT
  function handleLikes(id){
    axios.put(`/gallery/like/${id}`)
        .then(() =>{
            fetchGallery();
        })
        .catch((error) =>{
            console.log('like failed', error);
        })
}
//function to delete gallery item
  //DELETE
  function deleteGalleryItem(id){
    console.log('in delete', id);
    axios({
        url:'/gallery/'+id,
        method:'DELETE'
    }).then(()=>{
        console.log('Delete request worked');
        fetchGallery();
    }).catch((error)=>{
        console.log('Delete request failed', error);
    })
}
//function to post gallery item
  //POST
  const onCreateCharacter = (newCharacter) => {
    axios({
      method: 'POST',
      url: '/gallery',
      data: newCharacter
    })
      .then((response) => {
        fetchGallery();
      })
      .catch(function (error) {
        console.log('Error on add:', error);
      });
  }





    return (
      <div className="App">
        <Header />
        <GalleryForm 
          onCreateCharacter={onCreateCharacter}
        />
        <GalleryList 
          galleryList={galleryList}
          likes={handleLikes}
          trash={deleteGalleryItem}
        />
      </div>
    );
}

export default App;
