import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./home.scss";
import Widget from "../../components/widget/Widget";
import Featured from "../../components/featured/Featured";
import Chart from "../../components/chart/Chart";
import Table from "../../components/table/Table";
import WidgetHotel from "../../components/widgetHotel/WidgetHotel";
import WidgetRoom from "../../components/widgetRoom/WidgetRoom";
import WidgetVehicle from "../../components/widgetVehicle/WidgetVehicle";

const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <Widget/>
           <WidgetHotel />
          <WidgetRoom/>
          <WidgetVehicle/> 
        </div>
        <div className="charts">
          <Featured />
          <Chart title="Last 6 Months (Revenue)" aspect={2 / 1} />
        </div>

      </div>
    </div>
  );
};

export default Home;
