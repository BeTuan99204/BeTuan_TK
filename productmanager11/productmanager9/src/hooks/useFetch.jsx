import { useEffect, useState } from "react";

const useFetch=(url)=>{

    const [product,setProduct] = useState(null);

    useEffect(()=>{
        fetch(url)
        .then((res)=>res.json())
        .then((data)=>{
            setProduct(data)
        })
    },[url])

    return{product};

}

export default useFetch;