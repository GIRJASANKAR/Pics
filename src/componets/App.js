import React from 'react';
import axios from 'axios';
// j93ylJUX-iNd_Tmg9MomK43SbouCJ5tg2IpyZ_a_MDc
import SearchBar from './SearchBar';
import ImageList from './ImageList';



    //    to make a get request with axios we call axios.get and two seperate argument
class App extends React.Component{
   state={bhai:[]}; 

    ekCallbackFunction=async (childComponentKaValue)=>{

       const responce= await axios.get('https://api.unsplash.com/search/photos',{
         params:{ query:childComponentKaValue}, 
         headers:{
            Authorization: 'Client-ID j93ylJUX-iNd_Tmg9MomK43SbouCJ5tg2IpyZ_a_MDc'
         } 
         });//!st method->.then((responce)=>{
            // console.log(responce.data.results);  
      
       this.setState({bhai:responce.data.results});
   }

//    now we get the value of our searchTerm now we have to send api request using axios phir list bhi to karna h phir horizontally bhi list karna h css ki help se 
// phir kosis karni h ki 10 ya 11 tak khtm karke ek bar download karu uase;
   render(){
    return (
        <div className="ui container" style={{marginTop:'10px'}}>
            <SearchBar propKaNaam={this.ekCallbackFunction}/>
            <ImageList bhai={this.state.bhai}/>
            
        </div>
    );
   }

}

export default App;
// bit={onsumbit}