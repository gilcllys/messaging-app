import { Avatar } from '@mui/material'
import React from 'react'
import styles from './SideBarChat.module.css'

const SideBarChat = () => {
  const [seed, setSeed] = React.useState(0)

  React.useEffect(()=>{
    setSeed(Math.floor(Math.random()*500))
    
  },[])
  console.log(seed)
  return (
    <div className={styles.SideBarChat}>
      <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
      <div className={styles.SideBarChatInfo}>
        <h2>Room name</h2>
        <p>Last message..</p>
      </div>
    </div>
  )
}

export default SideBarChat