import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import {  userInputs ,hotelInputs } from "./formSource";
import "./style/dark.scss";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import { AuthContext } from "./context/AuthContex";
import { hotelColumns, userColumns, vehicleColumns } from "./datatablesource";
import { roomColumns} from "./datatablesource";
import NewHotel from "./pages/newHotel/NewHotel"; 
import NewRoom from "./pages/newRoom/NewRoom"; 
import SingleHotel from "./pages/singleHotel/SingleHotel"; 
import NewVehicle from "./pages/newVehicle/NewVehicle";
import SingleVehicle from "./pages/singleVehicle/SingleVehicle";
import SingleRoom from "./pages/singleRoom/SingleRoom";
import UserFilter from  "./pages/userFilter/UserFilter"
import HotelFilter from "./pages/hotelFilter/HotelFilter"
import RoomFilter from "./pages/roomFilter/RoomFilter"
import VehicleFilter from "./pages/vehicleFilter/VehicleFilter"



function App() {
  const { darkMode } = useContext(DarkModeContext);

  const ProtectedRoute = ({children}) => {
     const {user} = useContext(AuthContext)

     if(!user){
                return <Navigate to =   "/login"  />;
     }

     return children;
  }


  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route path="login" element={<Login />} />
            <Route 
              index 
              element={
                <ProtectedRoute>
                  <Home />
                </ProtectedRoute>
              } 
            />

            <Route path="users">
              <Route 
                index 
                element={
                  <ProtectedRoute>
                   <List columns={userColumns}/>
                  </ProtectedRoute>
                } 
              />
              <Route 
                path=":userId" 
                element={
                  <ProtectedRoute>
                    <Single />
                  </ProtectedRoute>
                } 
              />
              <Route
                path="new"
                element={
                  <ProtectedRoute>
                    <New inputs={userInputs} title="Add New User" />
                  </ProtectedRoute>
                  }
              />

              {/* hotels */}
            </Route>
            <Route path="hotels">
              <Route 
                index 
                element={
                  <ProtectedRoute>
                    <List columns={hotelColumns}/>
                  </ProtectedRoute>
                } 
              />

              <Route 
                path=":productId" 
                element={   
                  <ProtectedRoute>
                    <SingleHotel/>
                  </ProtectedRoute>
                } 
              />

              <Route
                path="new"
                element={
                  <ProtectedRoute>
                    <NewHotel />
                  </ProtectedRoute>
                }
              />
              </Route>


              {/* vehicle */}
              <Route path="vehicles">
                <Route 
                  index 
                  element={
                    <ProtectedRoute>
                      <List columns={vehicleColumns}/>
                    </ProtectedRoute>
                  } 
                />

              <Route 
                path=":vehicletId" 
                element={   
                  <ProtectedRoute>
                    <SingleVehicle/>
                  </ProtectedRoute>
                } 
              />

              <Route
                path="new"
                element={
                  <ProtectedRoute>
                    <NewVehicle/>
                  </ProtectedRoute>
                }
              />

              
            </Route>

            <Route path="rooms">
              <Route 
                index 
                element={
                  <ProtectedRoute>
                    <List columns={roomColumns}/>
                  </ProtectedRoute>
                } 
              />

              <Route 
                path=":roomId" 
                element={
                  <ProtectedRoute>
                    <SingleRoom />
                  </ProtectedRoute>
              } />
              <Route
                path="new"
                element={
                  <ProtectedRoute>
                   <NewRoom />
               </ProtectedRoute>
              }
              />

            </Route>


            <Route
                path="dashbord"
                element={
                  <ProtectedRoute>
                        <Home/>
               </ProtectedRoute>
              }
              />


            <Route
                path="userFilter"
                element={
                  <ProtectedRoute>
                        <UserFilter/>
               </ProtectedRoute>
              }
              />


              <Route
                path="hotelFilter"
                element={
                  <ProtectedRoute>
                        <HotelFilter/>
               </ProtectedRoute>
              }
              />

              <Route
                path="roomFilter"
                element={
                  <ProtectedRoute>
                        <RoomFilter/>
               </ProtectedRoute>
              }
              />

              <Route
                path="vehicleFilter"
                element={
                  <ProtectedRoute>
                        <VehicleFilter/>
               </ProtectedRoute>
              }
              />


          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
