import useFetch from "../../hooks/useFetch";
import "./propertyList.css"

const PropertyList = () => {

    const { data, loading, error } = useFetch("/hotels/countByType");


    const images= [
        "https://q-xx.bstatic.com/xdata/images/hotel/300x240/100235855.jpeg?k=5b6e6cff16cfd290e953768d63ee15f633b56348238a705c45759aa3a81ba82b&o=",
        "https://pix10.agoda.net/hotelImages/59736/-1/db24ed8c2fb70109ec687e5c8e39a43e.jpg?ca=0&ce=1&s=1024x768",
        "https://d1bv4heaa2n05k.cloudfront.net/posts%2FqMAvcE7r2d85hbtE7%2F1488370359026-ceylon-resized.jpg",
        "https://www.experiencetravelgroup.com/reposit/20191014083625.jpg",
    ]; 

  return (
    <div className="pList">
        {loading ? ( 
            "loading"
            ) : (
            <>
            {data && 
                images.map((img,i) => (

                <div className="pListItem" key={i}>
                    <img src={img} alt="" className="pListImg" />
                    <div className="pListTitles">
                        <h1>{data[i]?.type}</h1>
                        <h2>{data[i]?.count} {data[i]?.type}</h2>
                    </div>
                </div>

            ))}   
            </>
        )}
    </div>
  );
};

export default PropertyList