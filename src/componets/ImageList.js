// task is to show the Images which i get in line so person can scroll
import './ImageList.css';
import React from 'react';
import ImageCard from './ImageCard';

const ImageList =(props)=> {
  console.log(props.bhai);
     const fuck= props.bhai.map((qrsty)=>{
             return (
             <ImageCard key={qrsty.id} image={qrsty}/> )});

        return <div className="image-list">{fuck}</div>;
    
};

export default ImageList;