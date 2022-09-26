import "./vehicleFilter.scss";
import React from 'react'
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { useState } from "react";
import useFetch from "../../hooks/useFetch"
import { useEffect } from "react";
import { vehicleColumns } from "../../datatablesource";
import { DataGrid } from "@mui/x-data-grid";
import Button from '@mui/material/Button';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import IconButton from '@mui/material/IconButton';
import JsPDF from 'jspdf';
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

function VehicleFilter() {

  const [list , setList] = useState();
  const {data , loading , error} = useFetch("/vehicles")

  const [vehicle_class, setClass] = useState()
  const [vehicle_seats, setSeet] = useState()

  //add User
  useEffect(() => {
          setList(data);
   },[data])

   const handleClick = ()=>{
    setList(list.filter((item) =>     (    ( item.vehicle_class === vehicle_class ) && ( item.vehicle_seats ===  vehicle_seats )    )  
    
    ));
  }

   const generatePDF = () => {

     const report = new JsPDF('landscape','pt','a3');
   report.html(document.querySelector('.datatable')).then(() => {
        report.save('report.pdf');
    });
  }

  function refreshPage() {
    window.location.reload(false);
  }



   return (

     <div className="home">
     <Sidebar />
     <div className="homeContainer">
       <Navbar />

                       <div className="search">
                      <input className="serch" 
                      onChangeCapture ={(e) => setClass(e.target.value)}
                      type="text" 
                      placeholder="Filter Class"
                      />

                      <input className="serch" 
                      onChangeCapture ={(e) => setSeet(e.target.value)}
                      type="text" 
                      placeholder="Filter Seat"
                      />   
                      <div className="btn_list">
                          <Button className="filterbtn1" onClick={handleClick} variant="contained" disableElevation>
                          Filter User
                        </Button>
                        <Button className="filterbtn2" onClick={refreshPage}  variant="contained" disableElevation>
                          Clear
                        </Button>
                        <IconButton className="filterbtn3" onClick=  {generatePDF} color="error" aria-label="add an alarm">
                        <FileDownloadIcon />
                      </IconButton>          
                      </div>

                      <div className="search2">
                                         <input type="text" placeholder="Search..." />
                                         <SearchOutlinedIcon />
                                           </div>

                      </div>
                      <div className="datatable">
                      <DataGrid
                      className="datagrid"
                      rows={list}
                      columns={vehicleColumns}
                      pageSize={9}
                      rowsPerPageOptions={[9]}
                      getRowId={row=>row._id}
                      />
                      </div> 


   </div>
   </div>
  )
}

export default VehicleFilter



