import "./widget.scss";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import { Link } from "react-router-dom";
const Widget = ( ) => {
  let data;

  const amount = 100;



      data = {
        title: "USERS",
        link: "View User Report",
        icon: (
          <PersonOutlinedIcon
            className="icon"
            style={{
              color: "crimson",
              backgroundColor: "rgba(255, 0, 0, 0.2)",
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
        <Link to="/userFilter" style={{ textDecoration: "none" }}>
        <button className="viewButton">{data.link}</button>
        </Link>
      </div>
      <div className="right">
        {data.icon}
      </div>
    </div>
  );
};

export default Widget;
