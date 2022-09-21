import "./singleHotel.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Chart from "../../components/chart/Chart";
import List from "../../components/table/Table";
import React, { useEffect, useState ,Component } from "react";
import { get, useForm } from "react-hook-form";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContex"


const SingleHotel = () => {
//user fetch

const location = useLocation();
const id = location.pathname.split("/")[2];
const { data, loading, error, reFetch } = useFetch(`/hotels/find/${id}`);


//update function
const [file, setFile] = useState("");
const [info , setInfo] = useState({});

const handleChange= e => {

    setInfo( (prev) => ({...prev, [e.target.id] : e.target.value }));
 
};

function refreshPage() {
  window.location.reload(false);
}

const handleClick = async e =>{
  e.preventDefault();
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
          <div className="editButton">Edit</div>
          <h1 className="title">Hotel Information</h1>
          <div className="item">

            {/* to get photo */}
        <img className="itemImg" src={data.img || "https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png"} alt="avatar" />
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
                <span className="itemValue"><b>${data.cheapestPrice}</b></span>
              </div>
            </div>
          </div>
        </div>
        <div className="right">
     
        </div>
      </div>
      <div className="bottom">




        {/* For update form */}

      <div className="container">
                  <div className="card">

       <form onSubmit={handleClick}>
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
          
            {...register("type", { required: true })}
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






{/* 
      <div>
        <label>Type</label>
        <input
        id="type"
        onChangeCapture={handleChange}
         defaultValue= {data.email}
          {...register("email", {
            required: true,
            pattern: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/i,
          })}
        />
        <error>
          {errors.email?.type === "required" && "Email is required"}
          {errors.email?.type === "pattern" &&
            "Entered email is in wrong format"}
        </error>
      </div>
      <div>

        <label>Phone Number</label>
        <input
        id="phone"
        onChangeCapture={handleChange}
        defaultValue= {data.phone}
          type="number"
          {...register("number", {
            minLength: 6,
            maxLength: 12,
          })}
        />
        <error>
          {errors.number?.type === "minLength" &&
            "Entered number is less than 6 digits"}
          {errors.number?.type === "maxLength" &&
            "Entered number is more than 12 digits"}
        </error>
      </div>
      

      <div>
        <label>Country</label>
        <input
        id="country"
        onChangeCapture={handleChange}
          defaultValue= {data.country}
          {...register("country", { required: true })}
        />
        <error>
          {errors.country?.type === "required" && "Country is required"}
        </error>
      </div> */}

      

    
      <div>
        <input className="button" onSubmit={handleClick} type="submit" />
      </div>
    </form>
                  </div>
        </div>

      
    
      </div>
    </div>
  </div>
);
};
export default SingleHotel;
