import "./widgetRoom.scss";
import BedIcon from '@mui/icons-material/Bed';
import { Link } from "react-router-dom";

const WidgetRoom = ({ type }) => {
  let data;

  //temporary
  const amount = 100;



      data = {
        title: "ROOMS",
   
        link: "View Room Report",
        icon: (
          <BedIcon
            className="icon"
            style={{ backgroundColor: "rgba(0, 128, 0, 0.2)", color: "green" }}
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
        <Link to="/roomFilter" style={{ textDecoration: "none" }}>
        <button className="viewButton">{data.link}</button>
        </Link>
      </div>
      <div className="right">
        {data.icon}
      </div>
    </div>
  );
};

export default WidgetRoom;
