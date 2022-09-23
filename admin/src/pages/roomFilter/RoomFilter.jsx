import "./roomFilter.scss";

import React from 'react'
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { useState } from "react";
import useFetch from "../../hooks/useFetch"
import { useEffect } from "react";
import { roomColumns } from "../../datatablesource";
import { DataGrid } from "@mui/x-data-grid";

function RoomFilter() {

  const [list , setList] = useState();
  const {data , loading , error} = useFetch("/rooms")

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
       columns={roomColumns}
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

export default RoomFilter



