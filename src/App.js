import React from "react";
import { NProduct } from "./data";

function App() {
  return (
    <div>
      {/* <img src={require('./assets/img/unsplash1.jpg')} alt="" /> */}
      {NProduct.map((product) => (
        <ImageComponent
          key={product.id}
          src={product.thumbnails[0].img1}
          productName={product.name}
        />
      ))}
    </div>
  );
}

function ImageComponent({ src, productName }) {
  const [image, setImage] = React.useState(null);

  React.useEffect(() => {
    import(src).then((image) => setImage(image));
  }, [src]);

  React.useEffect(() => {
    console.log(JSON.stringify(image));
  }, [image]);

  return <img src={image?.default} alt={productName} />;
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
