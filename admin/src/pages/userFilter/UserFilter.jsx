import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import "./userFilter.scss";
import { DataGrid } from "@mui/x-data-grid";
import { useState } from "react";
import useFetch from "../../hooks/useFetch"
import { useEffect } from "react";
import { userColumns} from "../../datatablesource";
import * as React from 'react';
import Button from '@mui/material/Button';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import IconButton from '@mui/material/IconButton';
import JsPDF from 'jspdf';
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";


function UserFilter() {
  

  const [country, setCountry] = useState()
  const [city, setCity] = useState()
  const [srch , setserch] = useState()

   const [list , setList] = useState();
   const { data, loading, error, reFetch } = useFetch(`/users`);

   //retrive users
   useEffect(() => {
            setList(data);
    },[data])

    const handleClick = ()=>{
      setList(list.filter((item) =>  ( city.toLowerCase().includes(item.city.toLowerCase()) )  &&    
                                                      ( country.toLowerCase().includes(item.country.toLowerCase()) ) 
      
      ));
    }
    
    const searchClick = ()=>{
      setList(list.filter((item) =>  ( srch.toLowerCase().includes(item.username.toLowerCase()) )                    ||    
                                                      ( srch.toLowerCase().includes(item.email.toLowerCase()) )      || 
                                                      ( srch.toLowerCase().includes(item.country.toLowerCase()) )    || 
                                                      ( srch.toLowerCase().includes(item.phone.toLowerCase()) )      || 
                                                      ( srch.toLowerCase().includes(item.city.toLowerCase()) )  
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
                                      onChangeCapture ={(e) => setCountry(e.target.value)}
                                      type="text" 
                                      placeholder="Filter Country"
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
                              columns={userColumns}
                              pageSize={9}
                              rowsPerPageOptions={[9]}
                              getRowId={row=>row._id}
                            />
                          </div> 

{/* //end of the container */}
    </div>
    </div>
    )
  }
  
  export default UserFilter

