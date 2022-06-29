import React from 'react'
import { Avatar, IconButton } from '@mui/material'
import { AttachFile, MoreVert,SearchOutlined,InsertEmoticon } from '@mui/icons-material'
import MicIcon from '@mui/icons-material/Mic'
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
        <div className={styles.ChatBody}>

            <p className={styles.ChatMessage}>
                <span className={`${styles.ChatName}`}>
                    Nabendu
                </span>
                This a message
                <span className={styles.ChatTimesTamp}>
                    {new Date().toUTCString()}
                </span>
            </p>

            <p className={`${styles.ChatMessage} ${styles.ChatReciever}`}>
                <span className={styles.ChatName}>
                    Parag
                </span>
                This a message back
                <span className={styles.ChatTimesTamp}>
                    {new Date().toUTCString()}
                </span>
            </p>

            <p className={`${styles.ChatMessage}`}>
                <span className={styles.ChatName}>
                    Nabendu
                </span>
                This a message 
                <span className={styles.ChatTimesTamp}>
                    {new Date().toUTCString()}
                </span>
            </p>
        </div>
        <div className={styles.ChatFooter}>
            <InsertEmoticon />
            <form>
                <input placeholder='Type a message' type="text"/>
                <button type='submit'>
                    Send a message
                </button>
            </form>
            <MicIcon />
        </div>
    </div>
  )
}

export default Chat