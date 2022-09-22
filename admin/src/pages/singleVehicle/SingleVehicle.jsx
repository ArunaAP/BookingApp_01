import "./singleVehicle.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import React, { useEffect, useState ,Component } from "react";
import { get, useForm } from "react-hook-form";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import useFetch from "../../hooks/useFetch";



const SingleVehicle = () => {
//Fetch single vehicle

const location = useLocation();
const id = location.pathname.split("/")[2];
const { data, loading, error, reFetch } = useFetch(`/hotels/find/${id}`);


//update Vehicle
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
      const newHotel = {
        ...info,
      };
    
      await axios.put(`/hotels/${id}` , newHotel);
      refreshPage() 

  }catch(err){
    console.log(err)
    alert("Hotel Not Update ")
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
         
          <h1 className="title">Hotel Information</h1>
          <div className="item">

            {/* to get photo */}
        <img className="itemImg" src={data.photos || "https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png"} alt="avatar" />
            <div className="details">
              <h1 className="itemTitle">{data.name}</h1>
              <div className="detailItem">
                <span className="itemKey">Type:</span>
                <span className="itemValue">{data.type}</span>
              </div>
              <div className="detailItem">
                <span className="itemKey">Title:</span>
                <span className="itemValue">{data.title}</span>
              </div>
              <div className="detailItem">
                <span className="itemKey">City:</span>
                <span className="itemValue">
                  {data.city}
                </span>
              </div>
              <div className="detailItem">
                <span className="itemKey">Address:</span>
                <span className="itemValue">
                  {data.address}
                </span>
              </div>
              <div className="detailItem">
                <span className="itemKey">Price:</span>
                <span className="itemValue"><b>LKR {data.cheapestPrice}</b></span>
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
        <h1>Hotel Update Form</h1>
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
        <label>Type</label>
          <input
            id="type"
            onChangeCapture = {handleChange}
            defaultValue= {data.type}
          
            {...register("type", { required: false  })}
          />
        <error>
          {errors.type?.type === "required" && "type is required"}
        </error>
      </div>

      <div>
        <label>City</label>
          <input
            id="city"
            onChangeCapture = {handleChange}
            defaultValue= {data.city}
          
            {...register("city", { required: true })}
          />
        <error>
          {errors.city?.type === "required" && "city is required"}
        </error>
      </div>

      <div>
        <label>Address</label>
          <input
            id="address"
            onChangeCapture = {handleChange}
            defaultValue= {data.address}
          
            {...register("address", { required: true })}
          />
        <error>
          {errors.address?.type === "required" && "address is required"}
        </error>
      </div>

      <div>
        <label>Distance from City Center</label>
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
        <label>Title</label>
          <input
            id="title"
            onChangeCapture = {handleChange}
            defaultValue= {data.title}
          
            {...register("title", { required: true })}
          />
        <error>
          {errors.title?.type === "required" && "title is required"}
        </error>
      </div>

      <div>
        <label>Description</label>
          <input
            id="desc"
            onChangeCapture = {handleChange}
            defaultValue= {data.desc}
          
            {...register("desc", { required: true })}
          />
        <error>
          {errors.desc?.type === "required" && "desc is required"}
        </error>
      </div>

      <div>
        <label>Price</label>
          <input
            id="cheapestPrice"
            onChangeCapture = {handleChange}
            defaultValue= {data.cheapestPrice}
            
            {...register("cheapestPrice", { required: true })}
          />
        <error>
          {errors.cheapestPrice?.type === "required" && "tPrice is required"}
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
export default SingleVehicle;
