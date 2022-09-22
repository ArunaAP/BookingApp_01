import "./newRoom.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { roomInputs } from "../../formSource";
import { useState } from "react";
import useFetch from "../../hooks/useFetch";
import axios from "axios";

const NewRoom = ({ inputs, title }) => {
  const [file, setFile] = useState("");
  const [info, setInfo] = useState({});
  const [hotelId, setHotelId] = useState([undefined]);
  const [rooms, setRooms] = useState([]);
  
  const {data, loading, error} = useFetch("/hotels");


  const handleChange= (e) => {
    setInfo( (prev) => ({...prev, [e.target.id] : e.target.value }));
};


const handleClick = async (e)=>{
  e.preventDefault()
  const roomNumbers = rooms.split(",").map((room)=> ({number : room}));
  try{
   
   await axios.post('/rooms',{...info, roomNumbers});
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
                file
                  ? URL.createObjectURL(file)
                  : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              }
              alt=""
            />
          </div>
          <div className="right">
            <form>
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

                {/* <div className="formInput">
                  <label>choose a hotel</label>
                  <select id="hotelId"  onchange={e=>setHotelId(e.target.value)}>
                  {loading ? "loading" : data && data.map(hotel=>(
                    <option key={hotel._id}value={hotel._id}>{hotel.name}</option>
                    
                  ))}
                  </select>
                </div> */}


                <button onClick={handleClick}>ADD ROOM</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewRoom;
