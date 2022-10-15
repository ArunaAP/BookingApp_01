import "./hotelFilter.scss";
import React from 'react'
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { DataGrid } from "@mui/x-data-grid";
import { useState } from "react";
import useFetch from "../../hooks/useFetch"
import { useEffect } from "react";
import { hotelColumns} from "../../datatablesource";
import Button from '@mui/material/Button';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import IconButton from '@mui/material/IconButton';
import JsPDF from 'jspdf';
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

function HotelFilter() {

  const [list , setList] = useState();
  const {data , loading , error} = useFetch("/hotels")

  const [type, setType] = useState()
  const [city, setCity] = useState()
  const [srch , setserch] = useState()

  //add User
  useEffect(() => {
          setList(data);
   },[data])

const handleClick = ()=>{
      setList(list.filter((item) =>  ( city.toLowerCase().includes(item.city.toLowerCase()) )  &&    
                                                      ( type.toLowerCase().includes(item.type.toLowerCase()) ) 
      
      ));
    }


  const searchClick = ()=>{
    setList(list.filter((item) =>  ( srch.toLowerCase().includes(item.name.toLowerCase()) )                    ||    
                                                    ( srch.toLowerCase().includes(item.type.toLowerCase()) )      || 
                                                    ( srch.toLowerCase().includes(item.title.toLowerCase()) )    || 
                                                    ( srch.toLowerCase().includes(item.city.toLowerCase()) )      || 
                                                    ( srch.includes(item.cheapestPrice) )  
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
                      onChangeCapture ={(e) => setType(e.target.value)}
                      type="text" 
                      placeholder="Filter Type"
                      />

                      <input className="serch" 
                      onChangeCapture ={(e) => setCity(e.target.value)}
                      type="text" 
                      placeholder="Filter City"
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
                                         <input type="text" placeholder="Search..." onChangeCapture ={(e) => setserch(e.target.value)} />
                                         <IconButton onClick={searchClick}>
                                         <SearchOutlinedIcon />
                                         </IconButton>
                                        
                                           </div>




                      </div>

                      <div className="datatable">
                      <DataGrid
                      className="datagrid"
                      rows={list}
                      columns={hotelColumns}
                      pageSize={9}
                      rowsPerPageOptions={[9]}
                      getRowId={row=>row._id}
                      />
                      </div> 

   </div>
   </div>
  )
}

export default HotelFilter



