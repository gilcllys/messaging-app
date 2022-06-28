import React from "react";
import styles from "./SideBar.module.css";
import DonutLargeIcon from "@mui/icons-material/DonutLarge";
import ChatIcon from "@mui/icons-material/Chat";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Avatar, IconButton } from "@mui/material";
import { SearchOutlined } from "@mui/icons-material";
import SideBarChat from "../SideBarChat/SideBarChat";

const SideBar = () => {
  return (
    <div className={styles.SideBar}>
      <div className={styles.SideBarHeader}>
        <Avatar src="https://cdn.pixabay.com/photo/2016/11/29/11/24/woman-1869158_1280.jpg" />
        <div className={styles.SideBarHeaderRight}>
          <IconButton>
            <DonutLargeIcon />
          </IconButton>
          <IconButton>
            <ChatIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>
      <div className={styles.SideBarSearch}>
        <div className={styles.SideBarSearchContainer}>
          <SearchOutlined />
          <input placeholder="Seatch or start new chat" type="text" />
        </div>
      </div>
      <div className={styles.SideBarChats}>
        <SideBarChat />
        <SideBarChat />
        <SideBarChat />
      </div>
    </div>
  );
};

export default SideBar;
