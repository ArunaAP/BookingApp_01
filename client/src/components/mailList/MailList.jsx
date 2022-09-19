import "./mailList.css"

const MailList = () => {
  return (
    <div className="mail">
        <h1 className="mailTitle">Save time, Save money!</h1>
        <span className="mailDesc">Sign up and we'll send a best details for you</span>
        <div className="mailInputContainer">
            <input type="text" placeholder="Email" />
            <button>Subscribe</button>
        </div>
    </div>
  )
}

export default MailList