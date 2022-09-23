import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import "./userFilter.scss";
import { DataGrid } from "@mui/x-data-grid";

import { useState } from "react";
import useFetch from "../../hooks/useFetch"
import { useEffect } from "react";
import { userColumns, userRows } from "../../datatablesource";


function UserFilter() {

   const [list , setList] = useState();
   const {data , loading , error} = useFetch("/users")

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
        columns={userColumns}
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
  
  export default UserFilter

