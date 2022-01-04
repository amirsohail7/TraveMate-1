import React,{useState,useEffect} from "react";
import "./widgetSm.css";
import { Visibility } from "@material-ui/icons";
import axios from "axios";
import { Link } from "react-router-dom";

export default function WidgetSm() {
  const [newUsers, setNewUsers] = useState([]);

  useEffect(() => {
    const getNewUsers = async () => {
      try {
        const res = await axios.get("http://localhost:3040/traveler?new=true")
        setNewUsers(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getNewUsers(newUsers);
  }, []);
console.log(newUsers)

  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Joined Users</span>
      <ul className="widgetSmList">
      {newUsers.map((user) => (
        <li className="widgetSmListItem">
          <img
            src={user.profilePic ||
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSegdLPBUw9F-YVGoqjyYcgSA8VQOfyF4aFTg&usqp=CAU"}
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">{user.username}</span>
            {/* <span className="widgetSmUserTitle">Travler</span> */}
          </div>
          <Link className="widgetSmButton" to="">
            <Visibility className="widgetSmIcon" />
            
          </Link>
        </li>))}
      </ul>
    </div>
  );
}
