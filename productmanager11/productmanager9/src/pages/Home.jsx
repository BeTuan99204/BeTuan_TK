import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { featchProducts } from "../features/ProductSlice";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
const Home =()=>{

    const [search,setSearch] = useState("");

    const dispatch = useDispatch();
    const {products,loading,error} = useSelector((state)=>state.products);

    useEffect(()=>{
        dispatch(featchProducts());
    },[dispatch])

    if(loading){
        return <p>products loading......</p>
    }

    const HandleDelete= async(id)=>{
         toast.success("delete thanh cong")
        try {
            await fetch(`http://localhost:3000/products/${id}`,{
                method:'DELETE'
            })
        } catch (error) {
            console.log(error)
        }
    }

    const HandleSearchByName=()=>{
        if(!search.trim()) return products;

        return products.filter((item)=>
        item.name.toLowerCase().includes(search.toLowerCase())
        );
    }

    const searcByName = HandleSearchByName();
    

    return (
        <div className="w-full">
            <p className="text-4xl text-blue-500 font-bold p-3">Danh sách sản phẩm</p>
            <Link to="/add" className="bg-green-400 rounded rounded-2 p-2 text-white ml-4">Add products</Link>
            <input type="text" className="ml-4 border border-1 rounded rounded-2 w-100 h-[35px]" placeholder="Search By Name...." value={search} onChange={(e)=>setSearch(e.target.value)} />
            <br />
            <br />
            <div className="grid grid-cols-12 gap-4">
                {searcByName.map((item)=>(
                    <div key={item.id} className="col-span-6 shadow shadow-black hover:bg-green-200">
                        <div className="flex">
                            <div className="flex-1 p-3">
                                <p><b>Tên sản phẩm : </b>{item.name}</p>
                                <p><b>Giá sản phẩm : </b>{item.price} VND</p>
                                <p><b>Mô tả sản phẩm : </b>{item.description}</p>
                                <Link to={`/product/${item.id}`} className="text-blue-500">chi tiết sản phẩm...</Link>
                                <br />
                                <br />
                                <Link to={`/update/${item.id}`} className="bg-green-400 rounded rounded-2 p-2 text-white">update products</Link>
                                <button className="bg-red-400 rounded rounded-2 p-2 text-white ml-3" onClick={()=>HandleDelete(item.id)}>delete products</button>
                            </div>
                            <img src={item.image} className="w-[250px] h-[200px]  p-3 rounded rounded-[20px]" alt="" />
                        </div>
                    </div>
                ))}
            </div>
            <br />
        </div>
    )
}

export default Home;