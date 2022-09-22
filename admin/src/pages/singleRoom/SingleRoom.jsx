import "./singleRoom.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import React, { useEffect, useState ,Component } from "react";
import { get, useForm } from "react-hook-form";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import useFetch from "../../hooks/useFetch";



const SingleRoom = () => {
//Fetch single room

const location = useLocation();
const id = location.pathname.split("/")[2];
const { data, loading, error, reFetch } = useFetch(`/rooms/${id}`);


//update room
const [file, setFile] = useState("");
const [info , setInfo] = useState({});

const handleChange= e => {

    setInfo( (prev) => ({...prev, [e.target.id] : e.target.value }));
 
};

function refreshPage() {
  window.location.reload(false);
}

const handleClick = async e =>{
  // e.preventDefault();
  const data = new FormData()
  data.append("file" , file )
  data.append("upload_preset" , "upload")

  try{
      const newRoom = {
        ...info,
      };
    
      await axios.put(`/rooms/${id}` , newRoom);
      refreshPage() 

  }catch(err){
    console.log(err)
    alert("Room Not Update ")
  }
}

//for validation
const {
  register,
  formState: { errors },
  handleSubmit,
} = useForm();

const onSubmit = (data) => console.log(data);

return (
  <div className="single">
    <Sidebar />
    <div className="singleContainer">
      <Navbar />
      <div className="top">
        <div className="left">
         
          <h1 className="title">Room Information</h1>
          <div className="item">

            {/* to get photo */}
        <img className="itemImg" src={data.photos || "https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png"} alt="avatar" />
            <div className="details">
              <h1 className="itemTitle">{data.name}</h1>
              <div className="detailItem">
                <span className="itemKey">Address:</span>
                <span className="itemValue">{data.address}</span>
              </div>
              <div className="detailItem">
                <span className="itemKey">Contack No:</span>
                <span className="itemValue">{data.contactNumber}</span>
              </div>
              <div className="detailItem">
                <span className="itemKey">Type:</span>
                <span className="itemValue">
                  {data.type}
                </span>
              </div>
              <div className="detailItem">
                <span className="itemKey">Price:</span>
                <span className="itemValue">
                  {data.price}
                </span>
              </div>
              <div className="detailItem">
                <span className="itemKey">Num Of Beds:</span>
                <span className="itemValue"> {data.numberOfBeds}
                </span>
              </div>
              <div className="detailItem">
                <span className="itemKey">Distance:</span>
                <span className="itemValue">
                  {data.distance}
                </span>
              </div>
              <div className="detailItem">
                <span className="itemKey">Rating:</span>
                <span className="itemValue">
                  {data.rating}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="right">
      {/* For update form */}

      <div className="container">
                  <div className="card">

       <form onSubmitCapture={handleSubmit(handleClick)}>
      <div>
        <h1>Room Update Form</h1>
      </div>


      <div>
        <label>Name</label>
          <input
            id="name"
            onChangeCapture = {handleChange}
            defaultValue= {data.name}
          
            {...register("name", { required: true })}
          />
        <error>
          {errors.name?.type === "required" && "Name is required"}
        </error>
      </div>

      <div>
        <label>Address</label>
          <input
            id="address"
            onChangeCapture = {handleChange}
            defaultValue= {data.address}
          
            {...register("address", { required: false  })}
          />
        <error>
          {errors.address?.type === "required" && "address is required"}
        </error>
      </div>

      <div>
        <label>Contact Number</label>
          <input
            id="contactNumber"
            onChangeCapture = {handleChange}
            defaultValue= {data.contactNumber}
          
            {...register("contactNumber", { required: true })}
          />
        <error>
          {errors.contactNumber?.type === "required" && "contactNumber is required"}
        </error>
      </div>

      <div>
        <label>type</label>
          <input
            id="type"
            onChangeCapture = {handleChange}
            defaultValue= {data.type}
          
            {...register("type", { required: true })}
          />
        <error>
          {errors.type?.type === "required" && "type is required"}
        </error>
      </div>

      <div>
        <label>Price</label>
          <input
            id="price"
            onChangeCapture = {handleChange}
            defaultValue= {data.price}
          
            {...register("price", { required: true })}
          />
        <error>
          {errors.price?.type === "required" && "price is required"}
        </error>
      </div>

      <div>
        <label>Number Of Beds</label>
          <input
            id="numberOfBeds"
            onChangeCapture = {handleChange}
            defaultValue= {data.numberOfBeds}
          
            {...register("numberOfBeds", { required: true })}
          />
        <error>
          {errors.numberOfBeds?.type === "required" && "numberOfBeds is required"}
        </error>
      </div>

      <div>
        <label>Distance</label>
          <input
            id="distance"
            onChangeCapture = {handleChange}
            defaultValue= {data.distance}
          
            {...register("distance", { required: true })}
          />
        <error>
          {errors.distance?.type === "required" && "distance is required"}
        </error>
      </div>

      <div>
        <label>Rating</label>
          <input
            id="rating"
            onChangeCapture = {handleChange}
            defaultValue= {data.rating}
            
            {...register("rating", { required: true })}
          />
        <error>
          {errors.rating?.type === "required" && "rating is required"}
        </error>
      </div>

      <div>
        <input className="button" type="submit" />
      </div>
    </form>
          </div>
        </div>
        </div>
      </div>
      <div className="bottom">

      </div>
    </div>
  </div>
);
};
export default SingleRoom;