import React from 'react';
import { NProduct } from './data';

function App() {
  console.log(NProduct)
  return (
  <div>
      {/* <img src={require('./assets/img/unsplash1.jpg')} alt="" /> */} 
      {NProduct.map((product) => (
      <img key={product.id} src={product.thumbnails[0].img1}default alt={product.name}/>
        ))}
    </div>
  );
}

export default App;


//Nincs kép
/*  <img key={product.id} src={product.thumbnails[0]}default alt={product.name}/> */


// Nincs kép!

/* function App() {
  console.log(NProduct)
  return (
  <div>
      <img src={require('./assets/img/unsplash1.jpg')} alt="" />
      {NProduct.map((product) => (
        <div key={product.id}>
          {product.thumbnails.map((thumbnail, index) => (
            <img src={thumbnail.img1} alt={product.name} key={index} />
          ))}
        </div>
        ))}
    </div>
  );
} */