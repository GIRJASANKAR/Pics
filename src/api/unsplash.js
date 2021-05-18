// releated to configration of axios
import axios from 'axios';

export default axios.create({
    BaseURL:'https://api.unsplash.com',
    headers:{
        Authorization: 'Client-ID j93ylJUX-iNd_Tmg9MomK43SbouCJ5tg2IpyZ_a_MDc'
     } 
})
