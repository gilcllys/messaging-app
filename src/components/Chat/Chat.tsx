import React from 'react'
import { Avatar, IconButton } from '@mui/material'
import { AttachFile, MoreVert,SearchOutlined } from '@mui/icons-material'
import styles from './Chat.module.css'


const Chat = () => {
    const [seed, setSeed] = React.useState(0)
    React.useEffect( ()=>{
        setSeed(Math.floor(Math.random() * 500))
    },[])

  return (
    <div className={styles.Chat}>
        <div className={styles.ChatHeader}>
            <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`}/>
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
        <div className={styles.ChatBody}></div>
        <div className={styles.ChatFooter}></div>
    </div>
  )
}

export default Chat