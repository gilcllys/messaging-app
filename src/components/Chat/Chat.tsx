import React from "react";
import { Avatar, IconButton } from "@mui/material";
import {
  AttachFile,
  MoreVert,
  SearchOutlined,
  InsertEmoticon,
} from "@mui/icons-material";
import MicIcon from "@mui/icons-material/Mic";
import styles from "./Chat.module.css";

const Chat = ({ messages }) => {
  const [seed, setSeed] = React.useState(0);
  const [input, setInput] = React.useState("");

  async function sendMessage(e:any) {
    e.preventDefault();
    await fetch("https://messaging-mern-app.herokuapp.com/messages/new", {
      method: "POST",
      body: JSON.stringify({
        message: input,
        name: "thewebdev",
        timestamp: new Date().toISOString(),
        received: true,
      }),
      headers:{'Content-type':'application/json'}
    });
    setInput("")
  }

  React.useEffect(() => {
    setSeed(Math.floor(Math.random() * 500));
  }, []);

  return (
    <div className={styles.Chat}>
      <div className={styles.ChatHeader}>
        <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
        <div className={styles.ChatHeaderInfo}>
          <h3>Room Name</h3>
          <p>Last seen at ...</p>
        </div>
        <div className={styles.ChatHeaderRight}>
          <IconButton>
            <SearchOutlined />
          </IconButton>
          <IconButton>
            <AttachFile />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </div>
      <div className={styles.ChatBody}>
        {messages.map((message:any) => (
          <p
            key={message._id}
            className={`${styles.ChatMessage} ${
              message.received && styles.ChatReciever
            }`}
          >
            <span className={styles.ChatName}>{message.name}</span>
            {message.message}
            <span className={styles.ChatTimesTamp}>{message.timestamp}</span>
          </p>
        ))}
      </div>
      <div className={styles.ChatFooter}>
        <InsertEmoticon />
        <form>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type a message"
            type="text"
          />
          <button onClick={sendMessage} type="submit">
            Send a message
          </button>
        </form>
        <MicIcon />
      </div>
    </div>
  );
};

export default Chat;
