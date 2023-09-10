import "./leftBar.scss";
import friends from "../../assets/icons/friends.png";
import groups from "../../assets/icons/groups.png";
import events from "../../assets/icons/events.png";

const LeftBar = () => {
  return (
    <div className="leftbar">
      <div className="container">
        <div className="user">
          <img
            src="https://images.pexels.com/photos/8059123/pexels-photo-8059123.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="user"
          />
          <span>John Doe</span>
        </div>
        <div className="item">
          <img src={friends} alt="Friends" />
          <span>Friends</span>
        </div>
        <div className="item">
          <img src={groups} alt="Groups" />
          <span>Groups</span>
        </div>
        <div className="item">
          <img src={events} alt="Events" />
          <span>Events</span>
        </div>
      </div>
      <hr></hr>
    </div>
  );
};

export default LeftBar;
