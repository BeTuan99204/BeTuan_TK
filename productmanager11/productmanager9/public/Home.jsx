import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProduct } from "../features/ProductSlice";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
const Home =()=>{
    const dispatch = useDispatch();
    const {products,loading,error} = useSelector((state)=>state.products);

    const [Search,setSearch] = useState("");

    useEffect(()=>{
        dispatch(fetchProduct());
    },[dispatch])

    if(loading){
        return <p>Products laoding..................</p>
    }

    const HandleDelete = async(id)=>{
        toast.success("delete sản phẩm thành công")
        setTimeout(async() => {
            try {
        await fetch(`http://localhost:3000/products/${id}`,{
            method:'DELETE',
        })
        } catch (error) {
            console.log(error)
        }
        }, 1000);
    }
    
const HandleSearchProductByName = () => {
    if (!Search.trim()) return products;
    return products.filter((item) =>
        item.name.toLowerCase().includes(Search.toLowerCase())
    );
};

const filteredProducts = HandleSearchProductByName();

    return(

        <div className="w-full">
            <br />
              <p className="text-4xl text-blue-500 font-bold p-2">Danh sách sản phẩm</p>
              <Link to="/add" className="bg-green-400 rounded rounded-2 text-white p-2 ml-2" >Thêm sản phẩm</Link>
              <input type="text" className="w-[400px] border border-1 rounded rounded-2 h-[35px] ml-5" placeholder="Search Product here...." value={Search} onChange={(e)=>setSearch(e.target.value)}/>
              <br />
              <br />
            <div className="grid grid-cols-12 gap-4">     
                {filteredProducts.map((item)=>(
                    <div key={item.id} className="col-span-6 shadow-lg shadow-black hover:bg-green-200">        
                        <div className="flex">
                            <div className="flex-1 p-3">
                                <p><b>Tên sản phẩm : </b>{item.name}</p>
                                <p><b>Giá sản phẩm : </b>{item.price}</p>
                                <p><b>Mô tả sản phẩm : </b>{item.description}</p>
                                <Link to={`/product/${item.id}`} className="text-blue-500">chi tiết sản phẩm....</Link>
                                <br />
                                <br />
                                <Link to={`/update/${item.id}`} className="bg-green-400 rounded rounded-2 text-white p-2 ml-2" >update sản phẩm</Link>
                                <button className="bg-red-400 rounded rounded-2 text-white p-2 ml-2" onClick={()=>HandleDelete(item.id)} >delete sản phẩm</button>
                            </div>  
                            <img src={item.image} className="h-[200px] w-[250px] p-3 rounded rounded-[30px]" alt="" />
                        </div>

                    </div>
                ))}
            </div>
            <br />
        </div>
    )
}

export default Home;