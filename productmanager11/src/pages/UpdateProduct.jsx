import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
const UpdateProduct=()=>{
    const navigate = useNavigate();
    const {id} = useParams();
    const [ID,setID] = useState("");
    const [name,setName] = useState("");
    const [date,setDate] = useState("");
    const [location,setLocation] = useState("");
    const [description,setDescription] = useState("");
    const [model,setModdel] = useState(true);
    const [category,setCategory] = useState("");
    const [skill,setSkill] = useState([]);
    const [image,setImage] = useState("");

    useEffect(()=>{
        fetch('https://683076bcf504aa3c70f807c0.mockapi.io/events/'+id)
        .then((res)=>res.json())
        .then((data)=>{
            setID(data.id);
            setName(data.name);
            setDate(data.date);
            setLocation(data.location);
            setCategory(data.category);
            setDescription(data.description);
            setSkill(data.skill);
            setImage(data.image);
            setModdel(data.model);
        })
    },[id])

    const HandleUpdate = async(e)=>{
        toast.success("update succsess");
        const events = {
            id:ID,
            name,
            date,
            location,
            description,
            model:model==="true",
            category,
            skill,
            image
        }

        await fetch('https://683076bcf504aa3c70f807c0.mockapi.io/events/'+id,{
            method:'PUT',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(events)
        })
        navigate("/")
    }



    return(
        <div className="w-full">
            <div className="grid grid-cols-12">
               <div className="col-span-4"></div>
               <div className="col-span-4">
                <div className="p-5 shadow-xl shadow-black">
                    <p className="text-4xl text-blue-400 font-bold m-3 text-center">UPDATE SỰ KIỆN</p>
                    <hr />
                    <br />
                    <br />
                    <label htmlFor="" className="text-xl text-blue-400 font-bold">Tên sự kiện</label>
                    <input type="text" className="w-[470px] h-[35px] border border-1 rounded rounded-2" value={name} onChange={(e)=>setName(e.target.value)} /><br /><br />

                    <label htmlFor="" className="text-xl text-blue-400 font-bold">Ngày diễn ra sự kiện</label>
                    <input type="date" className="w-[470px] h-[35px] border border-1 rounded rounded-2" value={date} onChange={(e)=>setDate(e.target.value)} /><br /><br />

                    <label htmlFor="" className="text-xl text-blue-400 font-bold">Địa điểm sự kiện</label>
                    <input type="text" className="w-[470px] h-[35px] border border-1 rounded rounded-2" value={location} onChange={(e)=>setLocation(e.target.value)} /><br /><br />

                    <label htmlFor="" className="text-xl text-blue-400 font-bold">Mô tả sự kiện</label>
                    <input type="text" className="w-[470px] h-[35px] border border-1 rounded rounded-2" value={description} onChange={(e)=>setDescription(e.target.value)} /><br /><br />

                    <label htmlFor="" className="text-xl text-blue-400 font-bold">Loại sự kiện</label>
                    <select name="" id="" className="w-[470px] h-[35px] border border-1 rounded rounded-1" onChange={(e)=>setCategory(e.target.value)}>
                        <option value="thiết kế">Thiết kế</option>
                        <option value="sáng tạo">sáng tạo</option>
                        <option value="tư duy">Tư duy</option>
                    </select>
                    

                    <label htmlFor="" className="text-xl text-blue-400 font-bold">SKill sự kiện</label><br />
                    <input type="checkbox" className="" value={"thiết kế"} checked={skill.includes("thiết kế")} onChange={(e)=>setSkill([...skill,e.target.value])} />Thiết kế<br />
                    <input type="checkbox" className="" value={"vẽ"} checked={skill.includes("vẽ")} onChange={(e)=>setSkill([...skill,e.target.value])} />vẽ<br />
                    <input type="checkbox" className="" value={"công nghệ"} checked={skill.includes("công nghệ")} onChange={(e)=>setSkill([...skill,e.target.value])} />công nghệ<br />


                    <label htmlFor="" className="text-xl text-blue-400 font-bold">Hình thức sự kiện</label><br />
                    <input type="radio" className="" value="true" name="model" checked={model === true} onChange={(e)=>setModdel(true)} />Offline<br />
                    <input type="radio" className="" value="false" name="model" checked={model === false} onChange={(e)=>setModdel(false)} />Online<br />

                    <label htmlFor="" className="text-xl text-blue-400 font-bold">File sự kiện</label>
                    <input type="file" className="w-[470px] h-[35px] border border-1 rounded rounded-2"  onChange={(e)=>setImage(e.target.files[0].name)} /><br /><br />

                    <button  className="bg-green-400 font-bold text-white rounded rounded-2 p-2 w-[470px]" onClick={HandleUpdate}>Update events</button>
                </div>
               </div>
               <div className="col-span-4"></div>
            </div>
        </div>
    )
}
export default UpdateProduct;