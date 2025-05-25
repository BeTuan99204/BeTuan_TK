import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const AddProduct=()=>{

    const navigate = useNavigate();
    const [name,setName] = useState("");
    const [price,setPrice] = useState("");
    const [description,setDescription] = useState("");
    const [image,setImage] = useState("");

    const HandleAdd =async(e)=>{
        toast.success("them thanh cong")
        setTimeout(async() => {
            const product = {
            id:Date.now().toString(),
            name,
            price,
            description,
            image
        }

        await fetch('http://localhost:3000/products',{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(product)
        })
        navigate("/");
        }, 1000);
    }

    return(
        <div className="w-full">
            <br />
            <br />
            <div className="grid grid-cols-12">
                <div className="col-span-4"><button className="bg-red-400 rounded rounded-2 p-2 text-white ml-3" onClick={()=>navigate(-1)}>quay lai</button></div>
                <div className="col-span-4">
                    <div className="shadow-2xl shadow-black p-5">
                        <p className="text-4xl text-blue-500 font-bold p-3 text-center">Add Products</p>
                        <hr />
                        <br />

                        <label htmlFor="" className="text-xl text-blue-500 font-bold">Tên sản phẩm</label>
                        <input type="text" className="w-[470px] h-[35px] border border-1 font-bold rounded rounded-3" value={name} onChange={(e)=>setName(e.target.value)}/> <br /><br />

                        <label htmlFor="" className="text-xl text-blue-500 font-bold">Giá sản phẩm</label>
                        <input type="text" className="w-[470px] h-[35px] border border-1 font-bold rounded rounded-3" value={price} onChange={(e)=>setPrice(e.target.value)}/> <br /><br />

                        <label htmlFor="" className="text-xl text-blue-500 font-bold">Mô tả sản phẩm</label>
                        <input type="text" className="w-[470px] h-[35px] border border-1 font-bold rounded rounded-3" value={description} onChange={(e)=>setDescription(e.target.value)}/> <br /><br />

                        <label htmlFor="" className="text-xl text-blue-500 font-bold">File sản phẩm</label>
                        <input type="file" className="w-[470px] h-[35px] border border-1 font-bold rounded rounded-3"  onChange={(e)=>setImage(e.target.files[0].name)}/> <br /><br />

                        <button  className="bg-green-400 rounded rounded-2 p-2 text-white w-[470px]" onClick={HandleAdd}>Add products</button>
                    </div>
                </div>
                <div className="col-span-4"></div>
            </div>
           
        </div>
    )
}

export default AddProduct;