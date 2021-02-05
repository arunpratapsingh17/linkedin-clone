import React from "react";
import CreateIcon from "@material-ui/icons/Create";
import ImageIcon from "@material-ui/icons/Image";
import "./Feed.css";
import InputOption from "./InputOption";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import EventNoteIcon from "@material-ui/icons/EventNote";
import CalenderViewDayIcon from "@material-ui/icons/CalendarViewDay";
import Post from "./Post";
import firebase from "firebase";
import { db } from "./firebase";
const Feed = () => {
  const [posts, setPosts] = React.useState([]);
  const [input, setInput] = React.useState("");
  //Adding the post to backend db.
  const sendPosts = (e) => {
    e.preventDefault();
    db.collection("posts").add({
      name: "Arun Pratap Singh",
      description: "This is the first test post",
      message: input,
      photoUrl: "",
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setInput("");
  };

  React.useEffect(() => {
    db.collection("posts").onSnapshot((snapshot) =>
      setPosts(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      )
    );
    console.log(posts);
  }, []);
  return (
    <div className="feed">
      <div className="feed_inputContainer">
        <div className="feed_input">
          <CreateIcon />
          <form>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              type="text"
            />
            <button type="submit" onClick={sendPosts}>
              Send
            </button>
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
      {posts.map(({ id, data: { name, description, message, photoURL } }) => {
        console.log("UDJWBjbewk jabba");
        <Post
          // key={id}
          name="Nahiiii"
          description="Rand desciption"
          message="Rand message"
          // photoURL={photoURL}
        />;
      })}
    </div>
  );
};

export default Feed;
