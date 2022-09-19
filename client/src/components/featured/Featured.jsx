import useFetch from "../../hooks/useFetch"
import "./featured.css"

const Featured = () => {

    const { data, loading, error } = useFetch("/hotels/countByCity?cities=colombo,nuwaraeliya,bandarawela");

  return (
    <div className="featured">
        {loading ?(
            "Loading please wait"
            ) : (
            <>
            <div className="featuredItem">
            <img src="https://t-cf.bstatic.com/xdata/images/city/square250/685293.webp?k=799ffc96a5a78c6ed25a9f622dd64617e54e27219c54a828d1830cb3055560db&o=" alt="" className="featuredImg" />
            <div className="featuredTitles">
                <h1>Colombo</h1>
                <h2>{data[0]} Properties</h2>
            </div>
        </div>

        <div className="featuredItem">
            <img src="https://t-cf.bstatic.com/xdata/images/city/square250/685389.webp?k=b2ee6ea5ea52888fac4782d1c7959f9aa2572f382ff25a06418b53e735c71e80&o=" alt="" className="featuredImg" />
            <div className="featuredTitles">
                <h1>NuwaraEliya</h1>
                <h2>{data[1]} Properties</h2>
            </div>
        </div>

        <div className="featuredItem">
            <img src="https://t-cf.bstatic.com/xdata/images/city/square250/685330.webp?k=ee4ac422e47649d2d04a9759dc81fa51f138f477796a8043557e864517ae6f5f&o=" alt="" className="featuredImg" />
            <div className="featuredTitles">
                <h1>Bandarawela</h1>
                <h2>{data[2]} Properties</h2>
            </div>
        </div></>)}
    </div>
    
  )
}

export default Featured