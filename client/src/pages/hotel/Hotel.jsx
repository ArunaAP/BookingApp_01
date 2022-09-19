import "./hotel.css"
import Navbar from "../../components/navbar/Navbar"
import Header from "../../components/header/Header"
import MailList from "../../components/mailList/MailList"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLocationDot, faMapLocationDot } from "@fortawesome/free-solid-svg-icons"
import useFetch from "../../hooks/useFetch";
import { useLocation, useNavigate } from "react-router-dom"
import { useContext } from "react"
import { SeachContext } from "../../context/SearchContext"
import { AuthContext } from "../../context/AuthContex"
import { useState } from "react"
import Reserve from "../../components/reserve/Reserve"

const Hotel = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [openModal, setOpenModal] = useState(false)

  const { data, loading, error, reFetch } = useFetch(`/hotels/find/${id}`);
  const {user} = useContext(AuthContext)
  const navigate = useNavigate()

  const {dates, options} = useContext(SeachContext);

  const MILISECONDS_PER_DAY = 1000*60*60*24;
  function dayDifference(date1, date2){
    const timeDiff = Math.abs(date2.getTime() - date1.getTime());
    const diffDays = Math.ceil(timeDiff / MILISECONDS_PER_DAY);
    return diffDays;
  }

  const days = dayDifference(dates[0].endDate, dates[0].startDate)

  const handleClick = () =>{
    if(user){
      setOpenModal(true);
    }else{
      navigate("/login");
    }
  }

  return (
    <div>
      <Navbar/>
      <Header type="list"/>
      {loading ? ( 
        "loading..."
        ) : (
        <div className="hotelContainer">
        <div className="hotelWrapper">
          <h1 className="hotelTitle">{data.name}</h1>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot}/>
            <span>{data.address}</span>
          </div>
          <span className="hotelDistance">{data.distance} m from centure</span>
          <span className="hotelPriceHighlight">Book a stay over ${data.cheapestPrice} at this property</span>
          <div className="hotelImages">
              {data.photos?.map(photo=>(
                <div className="hotelImgWrapper">
                  <img src={photo} alt="" className="hotelImg" />
                </div>
              ))}
          </div>
          <div className="hotelDetails">
            <div className="hotelDetailsTexts">
              <h1 className="hotelTitle">{data.title}</h1>
              <p className="hotelDesc">
                {data.desc}
              </p>
            </div>
            <div className="hotelDetailsPrice">
              <h1>Perfect for a {days} night stay</h1>
              <span>
                This property has an excellent location
              </span>
              <h2>
                <b>${days * data.cheapestPrice * options.room}</b> {days} nights
              </h2>
              <button onClick={handleClick}>Reserve or Book now</button>
            </div>
          </div>
        </div>
        <MailList/>
      </div>
      )}
      {openModal && <Reserve setOpen={setOpenModal} hotelId={id}/>}
    </div>
  )
}

export default Hotel

