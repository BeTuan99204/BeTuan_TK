import { useNavigate, useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";

const ProductDetail =()=>{
    const {id} = useParams();
    const navigate = useNavigate();
    const {product} = useFetch('http://localhost:3000/products/'+id);



    if(product== null){
        return <p>products loading......</p>
    }

    return (
        <div className="w-full">
            <p className="text-4xl text-blue-500 font-bold p-3">Chi tiết sản phẩm</p>
            <br />
            <br />
            <div className="grid grid-cols-12 gap-4">
                <div className="col-span-3"></div>
                    <div className="col-span-6 shadow-2xl shadow-black p-5">

                        <br />
                        <div className="flex">
                            <div className="flex-1 p-3">
                                <br />
                                <p className="text-xl"><b>Tên sản phẩm : </b>{product.name}</p>
                                <p className="text-xl"><b>Giá sản phẩm : </b>{product.price} VND</p>
                                <p className="text-xl"><b>Mô tả sản phẩm : </b>{product.description}</p>
                                <br />
                                <br />
                                <br />
                                <br />
                                <br />
                                <button className="bg-red-400 rounded rounded-2 p-2 text-white ml-1" onClick={()=>navigate(-1)}>quay lai</button>
                            </div>
                            <img src={`/${product.image}`} className="w-[350px] h-[300px]  p-3 rounded rounded-[20px]" alt="" />
                        </div>
                    </div>
                     <div className="col-span-3"></div>
            </div>
            <br />
        </div>
    )
}


export default ProductDetail;