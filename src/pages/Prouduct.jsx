import React from 'react'
import {useState , useEffect} from 'react'
import { getProducts } from '../api/getProducts';
import Card from '../Components/Card';

const Prouduct = () => {
    const [product , setProduct] = useState([]);
  useEffect(()=>{
    (async ()=>{
        const data = await getProducts();
        setProduct(data);
    })()
  },[]);
  return (
    <>        {/* products part starts here */}
      
      {
        product.map((pro , index)=>
          <Card key={index} product={pro} />
        )
      }

      {/* products part ends here */}
      </>

  )
}

export default Prouduct