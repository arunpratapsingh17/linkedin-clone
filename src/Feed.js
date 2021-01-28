import React from "react";
import CreateIcon from "@material-ui/icons/Create";
import ImageIcon from "@material-ui/icons/Image";
import "./Feed.css";
import InputOption from "./InputOption";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import EventNoteIcon from "@material-ui/icons/EventNote";
import CalenderViewDayIcon from "@material-ui/icons/CalendarViewDay";
import Post from "./Post";
const Feed = () => {
  return (
    <div className="feed">
      <div className="feed_inputContainer">
        <div className="feed_input">
          <CreateIcon />
          <form>
            <input type="text" />
            <button type="submit">Send</button>
          </form>
        </div>
        <div className="feed_inputOptions">
          <InputOption title="Photo" Icon={ImageIcon} color="#70B5F9" />
          <InputOption Icon={SubscriptionsIcon} title="Video" color="#E7A33E" />
          <InputOption Icon={EventNoteIcon} title="Event" color="#C0CBCD" />
          <InputOption
            Icon={CalenderViewDayIcon}
            title="Write Article"
            color="#7FC15E"
          />
        </div>
      </div>
      <Post
        name="Jatin Singh"
        description="This is a text"
        message="Ohhh yess i am loving react"
      />
    </div>
  );
};

export default Feed;
