import "./widgetVehicle.scss";
import DriveEtaIcon from '@mui/icons-material/DriveEta';
import { Link } from "react-router-dom";

const WidgetVehicle = () => {
  let data;

  //temporary
  const amount = 100;



      data = {
        title: "VEHICLES",

        link: "View Vehicle Report",
        icon: (
          <DriveEtaIcon
            className="icon"
            style={{
              backgroundColor: "rgba(128, 0, 128, 0.2)",
              color: "purple",
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
        <Link to="/vehicleFilter" style={{ textDecoration: "none" }}>
        <button className="viewButton">{data.link}</button>
        </Link>
      </div>
      <div className="right">
        {data.icon}
      </div>
    </div>
  );
};

export default WidgetVehicle;
