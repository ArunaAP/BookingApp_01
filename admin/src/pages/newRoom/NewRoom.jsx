import "./newRoom.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { roomInputs } from "../../formSource";
import { useState } from "react";
import useFetch from "../../hooks/useFetch";
import axios from "axios";

const NewRoom = ({ inputs, title }) => {
  const [files, setFiles] = useState("");
  const [info, setInfo] = useState({});
  const [hotelId, setHotelId] = useState([undefined]);
  const [rooms, setRooms] = useState([]);
  
  const {data, loading, error} = useFetch("/hotels");


  const handleChange= (e) => {
    setInfo( (prev) => ({...prev, [e.target.id] : e.target.value }));
};

function refreshPage() {
  window.location.reload(false);
}


const handleClick = async (e)=>{
  e.preventDefault()
  
  try{
    const list = await Promise.all(
      Object.values(files).map( async(file)=>{
      const data = new FormData();
      data.append("file" , file );
      data.append("upload_preset" , "upload");
      const uploadRes = await axios.post("https://api.cloudinary.com/v1_1/namal97/image/upload" , data);
        const {url} = uploadRes.data;
        return url
    }));

    const roomNumbers = {
      ...info,photos: list,
    }
   
   await axios.post('/rooms', roomNumbers);
   refreshPage();

   }catch(err){
  console.log(err);
  }
};

  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>Add New Room</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img
              src={
                files
                  ? URL.createObjectURL(files[0])
                  : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              }
              alt=""
            />
          </div>
          <div className="right">
            <form>

            <div className="formInput">
                <label htmlFor="file">
                  Image: <DriveFolderUploadOutlinedIcon className="icon" />
                </label>
                <input
                  type="file"
                  id="file"
                  multiple
                  onChange={(e) => setFiles(e.target.files)}
                  style={{ display: "none" }}
                />
              </div>

              {roomInputs.map((input) => (
                <div className="formInput" key={input.id}>
                  <label>{input.label}</label>
                  < input id ={input.id}
                    input type={input.type} 
                   placeholder={input.placeholder} 
                  onChange={handleChange} />
                </div>
              ))}

              {/* <div className="formInput">
                  <label>Rooms</label>
                  <textarea onChange={e=>setRooms(e.target.value)} placeholder="give comma between room numbers"></textarea>
                </div> */}

                <div className="formInput">
                  <label>choose a hotel</label>
                  <select id="hotelId"  onchange={e=>setHotelId(e.target.value)}>
                  {loading ? "loading" : data && data.map(hotel=>(
                    <option key={hotel._id}value={hotel._id}>{hotel.name}</option>
                    
                  ))}
                  </select>
                </div>


                <button onClick={handleClick}>ADD ROOM</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewRoom;
