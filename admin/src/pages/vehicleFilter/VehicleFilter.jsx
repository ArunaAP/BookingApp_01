import "./vehicleFilter.scss";

import React from 'react'
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { useState } from "react";
import useFetch from "../../hooks/useFetch"
import { useEffect } from "react";
import { vehicleColumns } from "../../datatablesource";
import { DataGrid } from "@mui/x-data-grid";

function VehicleFilter() {

  const [list , setList] = useState();
  const {data , loading , error} = useFetch("/vehicles")

  //add User
  useEffect(() => {
          setList(data);
   },[data])


   return (

     <div className="home">
     <Sidebar />
     <div className="homeContainer">
       <Navbar />


      <div className="datatable">
     <DataGrid
       className="datagrid"
       rows={list}
       columns={vehicleColumns}
       pageSize={9}
       rowsPerPageOptions={[9]}
       checkboxSelection
       getRowId={row=>row._id}
     />
   </div> 

   </div>
   </div>
  )
}

export default VehicleFilter



