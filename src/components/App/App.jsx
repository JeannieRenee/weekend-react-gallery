import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios'; 

// import css file
import './App.css';
// import Header 
import Header from '../Header/Header'; 
// import GalleryList
import GalleryList from '../GalleryList/GalleryList'; 

function App() {
  let [galleryList, setGalleryList] = useState([]);

  useEffect(() => {
    // kinda like ready now, page load function 
    fetchGallery();
  }, []);

  // function to fetch the gallery data 
  //GET
  const fetchGallery = () => {
    console.log('in fetchGallery');
    axios({
      url:'/gallery',
      method:'GET'
  }).then((response)=>{
      console.log('Get',response.data);
      setGalleryList(response.data)
  }).catch((error)=>{
      console.log('Get require failed', error)
  })
}

  // function to tally likes
  //PUT
  function handleLikes(id){
    console.log('in handleLikes', id);
    axios.put(`/gallery/like/${id}`)
        .then(() =>{
            console.log('like worked')
            fetchGallery();
        })
        .catch((err) =>{
            console.log('like failed', err);
        })
}

    return (
      <div className="App">
        <Header />
        <GalleryList 
          galleryList={galleryList}
          likes={handleLikes}
        />
      </div>
    );
}

export default App;
