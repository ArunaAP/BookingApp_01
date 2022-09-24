import "./widgetHotel.scss";
import MapsHomeWorkIcon from '@mui/icons-material/MapsHomeWork';
import { Link } from "react-router-dom";


const WidgetHotel = () => {
  let data;

  //temporary
  const amount = 100;



      data = {
        title: "HOTELS",
        isMoney: false,
        link: "View Hotel Report",
        icon: (
          <MapsHomeWorkIcon
            className="icon"
            style={{
              backgroundColor: "rgba(218, 165, 32, 0.2)",
              color: "goldenrod",
            }}
          />
        ),
      };

  return (
    <div className="widget">
      <div className="left">
        <span  className="title" >  {data.title}  </span>
        <span className="counter">
           {amount}
        </span>
        <Link to="/hotelFilter" style={{ textDecoration: "none" }}>
        <button className="viewButton">{data.link}</button>
        </Link>
      </div>
      <div className="right">
        {data.icon}
      </div>
    </div>
  );
};

export default WidgetHotel;
