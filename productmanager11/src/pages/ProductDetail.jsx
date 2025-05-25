import { useNavigate, useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";

const ProductDetail=()=>{
    const navigate = useNavigate();
    const {id} = useParams();
    const {data} = useFetch('https://683076bcf504aa3c70f807c0.mockapi.io/events/'+id);

    if(data== null){
        return <p>Events is loading..........</p>
    }

    return(
        <div className="w-full">
            <br />
            <p className="text-4xl text-blue-400 font-bold m-3">CHI TIẾT SỰ KIỆN DIỄN RA</p>
            <br />
            <br />
            <div className="grid grid-cols-12 gap-4">
                <div className="col-span-3"></div>
                    <div className="col-span-6 shadow-md shadow-green-400 border border-green-400">
                        <div className="flex">
                            <div className="flex-1 p-3">
                                <p><b>Tên sự kiện :</b>{data.name}</p>
                                <p><b>Ngày bắt đầu:</b>{data.date}</p>
                                <p><b>Địa điểm :</b>{data.location}</p>
                                <p><b>Mô tả :</b>{data.description}</p>
                                <p><b>Hình thức :</b>{data.model ? "Offline":"Online"}</p>
                                <p><b>Loại sự kiện :</b>{data.category}</p>
                                <p><b>Kĩ năng :</b>{data.skill?.join(",")}</p>
                                <br />
                                <br />
                                <br />
                                  <button className="bg-red-400 font-bold text-white rounded rounded-2 p-2 ml-3" onClick={()=>navigate(-1)}>back events</button>
                            </div>
                            <img src={`/${data.image}`} className="w-[300px] h-[250px] p-5 rounded rounded-[50px]" alt="" />
                        </div>
                    </div>
                     <div className="col-span-3"></div>
            </div>
            <br />
        </div>
    )
}

export default ProductDetail;