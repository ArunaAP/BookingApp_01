import "./single.scss";
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


const Single = () => {

  //to user fetch function

  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [openModal, setOpenModal] = useState(false)
  const { data, loading, error, reFetch } = useFetch(`/users/${id}`);

  





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
            <h1 className="title">Information</h1>
            <div className="item">

              {/* to get photo */}
          <img className="itemImg" src={data.img || "https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png"} alt="avatar" />
              <div className="details">
                <h1 className="itemTitle">{data.username}</h1>
                <div className="detailItem">
                  <span className="itemKey">Email:</span>
                  <span className="itemValue">{data.email}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Phone:</span>
                  <span className="itemValue">{data.phone}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Country:</span>
                  <span className="itemValue">
                    {data.country}
                  </span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">City:</span>
                  <span className="itemValue">{data.city}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
       
          </div>
        </div>
        <div className="bottom">









          {/* For update form */}
          {/* <form onSubmit={handleSubmit(onSubmit)}></form> */}

          <div className="container">
                    <div className="card">

         <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <h1>Update Form</h1>
        </div>


        <div>
          <label>Name</label>
          <input
            
            defaultValue= {data.username}
          
          
            {...register("username", { required: true })}
          />
          <error>
            {errors.username?.type === "required" && "Name is required"}
          </error>
        </div>


        <div>
          <label>Email</label>
          <input
     
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

            defaultValue= {data.country}
            {...register("country", { required: true })}
          />
          <error>
            {errors.country?.type === "required" && "Country is required"}
          </error>
        </div>

        <div>
          <label>City</label>
          <input

            defaultValue= {data.city}
            {...register("city", { required: true })}
          />
          <error>
            {errors.city?.type === "required" && "City is required"}
          </error>
        </div>

      
        <div>
          <input className="button" onSubmit="" type="submit" />
        </div>
      </form>
                    </div>
          </div>

        
      
        </div>
      </div>
    </div>
  );
};

export default Single;
