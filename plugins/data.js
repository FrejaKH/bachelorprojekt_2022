const axios = require("axios");

export default async function ({store}){
    let obj;
    await axios.get("https://apim-av-ecommerce-prod.azure-api.net/vehicles/new/leasing?subscription-key=596d157bb64a4cfdbf3023bf10a91643")
    .then(response => {
        obj = response.data;
    })
    .catch(error => {
      console.log(error);
    });
    
   store.commit('saveCars', obj)
}


// Nedenstående kode er en backup til, hvis Autohuset Vestergaards API ikke virker

// import Data from '../assets/data/data.json';

// export default function ({store}){
//   store.commit('saveCars', Data);
// }







