import "./singleVehicle.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import React, { useEffect, useState ,Component } from "react";
import { get, useForm } from "react-hook-form";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import useFetch from "../../hooks/useFetch";



const SingleVehicle = () => {


const location = useLocation();
const id = location.pathname.split("/")[2];
const { data, loading, error, reFetch } = useFetch(`/vehicles/${id}`);



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
      const newVehicle = {
        ...info,
      };
    
      await axios.put(`/vehicles/${id}` , newVehicle);
      refreshPage() 

  }catch(err){
    console.log(err)
    alert("Vehicle Not Update ")
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
         
          <h1 className="title">Vehicle Information</h1>
          <div className="item">

            {/* to get photo */}
        <img className="itemImg" src={data.image || "https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png"} alt="avatar" />
            <div className="details">
              <h1 className="itemTitle">{data.vehicle_model}</h1>
              <div className="detailItem">
                <span className="itemKey">Vehicle Class:</span>
                <span className="itemValue">{data.vehicle_class}</span>
              </div>
              <div className="detailItem">
                <span className="itemKey">Vehicle Type:</span>
                <span className="itemValue">{data.vehicle_type}</span>
              </div>
              <div className="detailItem">
                <span className="itemKey">Vehicle Seats:</span>
                <span className="itemValue">
                  {data.vehicle_seats}
                </span>
              </div>
              
              <div className="detailItem">
                <span className="itemKey">Vehicle Register Number:</span>
                <span className="itemValue"> {data.vehicle_register_number}</span>
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
        <h1>Vehicle Update Form</h1>
      </div>


      <div>
        <label>Vehicle Model</label>
          <input
            id="vehicle_model"
            onChangeCapture = {handleChange}
            defaultValue= {data.vehicle_model}
          
            {...register("vehicle_model", { required: true })}
          />
        <error>
          {errors.vehicle_model?.type === "required" && "Model is required"}
        </error>
      </div>


      <div>
        <label>Vehicle Class</label>
          <input
            id="vehicle_class"
            onChangeCapture = {handleChange}
            defaultValue= {data.vehicle_class}
          
            {...register("vehicle_class", { required: true })}
          />
        <error>
          {errors.vehicle_class?.type === "required" && "Class is required"}
        </error>
      </div>

      <div>
        <label>Vehicle Type</label>
          <input
            id="vehicle_type"
            onChangeCapture = {handleChange}
            defaultValue= {data.vehicle_type}
          
            {...register("vehicle_type", { required: false  })}
          />
        <error>
          {errors.vehicle_type?.type === "required" && "type is required"}
        </error>
      </div>
      


      <div>
        <label>Vehicle Seats</label>
          <input
            id="vehicle_seats"
            onChangeCapture = {handleChange}
            defaultValue= {data.vehicle_seats}
          
            {...register("vehicle_seats", { required: true })}
          />
        <error>
          {errors.vehicle_seats?.type === "required" && "Seats is required"}
        </error>
      </div>

      <div>
        <label>Vehicle Vegister Number</label>
          <input
            id="vehicle_register_number"
            onChangeCapture = {handleChange}
            defaultValue= {data.vehicle_register_number}
          
            {...register("vehicle_register_number", { required: true })}
          />
        <error>
          {errors.vehicle_register_number?.type === "required" && "Reg num is required"}
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
