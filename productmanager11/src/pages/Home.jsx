import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchEvent } from "../features/EventsSlice";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const Home=()=>{

    const [search,setSearch]= useState("");
    const dispatch = useDispatch();
    const {events,loading,error} = useSelector((state)=>state.events);

    useEffect(()=>{
        dispatch(fetchEvent());
    },[dispatch])

    const Handledelete=async(id)=>{
        toast.success("delete success");
        try {
             await fetch('https://683076bcf504aa3c70f807c0.mockapi.io/events/'+id,{
            method:'DELETE'
             })
             dispatch(fetchEvent());
        } catch (error) {
            console.log(error);
            toast.error("delete that bai")
        }
        
    }

    const HandleSerchByName=()=>{
        if(!search.trim()) return events;

        return events.filter((item)=>
            item.name.toLowerCase().includes(search.toLowerCase())
        )
    }

    const searchByName = HandleSerchByName();


    if(loading){
        return <p>Events is loading..........</p>
    }

    return(
        <div className="w-full">
            <br />
            <p className="text-4xl text-blue-400 font-bold m-3">DANH SÁCH SỰ KIỆN DIỄN RA</p>
            <br />
            <Link  to="/add" className="bg-green-400 font-bold text-white rounded rounded-2 p-2 ml-3">add events</Link>
            <input type="text" className="w-100 h-[35px] border border-1 rounded rounded-2 ml-5" placeholder="Search here....." value={search} onChange={(e)=>setSearch(e.target.value)}/>
            <br />
            <br />
            <div className="grid grid-cols-12 gap-4">
                {searchByName.map((item)=>(
                    <div key={item.id} className="col-span-6 shadow-md shadow-green-400 border border-green-400">
                        <div className="flex">
                            <div className="flex-1 p-3">
                                <p><b>Tên sự kiện :</b>{item.name}</p>
                                <p><b>Ngày bắt đầu:</b>{item.date}</p>
                                <p><b>Địa điểm :</b>{item.location}</p>
                                <p><b>Mô tả :</b>{item.description}</p>
                                <p><b>Hình thức :</b>{item.model ? "Offline":"Online"}</p>
                                <p><b>Loại sự kiện :</b>{item.category}</p>
                                <p><b>Kĩ năng :</b>{item.skill?.join(",")}</p>
                                <Link to={`/event/${item.id}`} className="text-blue-400">chi tiết sự kiện......</Link>
                                <br />
                                <br />
                                <br />
                                 <Link to={`/update/${item.id}`} className="bg-green-400 font-bold text-white rounded rounded-2 p-2 ml-1">update events</Link>
                                  <button className="bg-red-400 font-bold text-white rounded rounded-2 p-2 ml-3" onClick={()=>Handledelete(item.id)}>delete events</button>
                            </div>
                            <img src={item.image} className="w-[300px] h-[250px] p-5 rounded rounded-[50px]" alt="" />
                        </div>
                    </div>
                ))}
            </div>
            <br />
        </div>
    )
}
export default Home;