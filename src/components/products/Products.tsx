import axios from "axios"
import { useEffect, useState } from "react"
import ProductItem from "./ProductItem";

export default function Products(){
    const [products,setProducts] = useState([]);

    const fetchData = async()=>{
        try{
            const response = await axios.get('https://fakestoreapi.com/products');
           const data = await response.data
           setProducts(data);
        }catch(err){
            console.log('fetching products failed')
        }
    }
    useEffect(()=>{
       fetchData();
    },[])

    return (
        <><h1>products page</h1>

        <div className="flex flex-wrap justify-center gap-4">
             {
            products.map((product:any)=>{return(
                 <ProductItem key={product.id} {...product}/>
            )})
        }
        </div>
        </>

    )
}