import React from "react"
import styles from "./App.module.css"
import SideBar from "./components/SideBar/SideBar"
import Chat from "./components/Chat/Chat"
import Pusher from "pusher-js"
require('dotenv').config()

function App() {
  
  const [messages, setMessages] = React.useState([])
  React.useEffect(()=>{
    const pusher = new Pusher("5c7d7b52edd5fc840b09",{
      cluster:'sa1'
    })
    
  },[])
  return (
    <div className={styles.App}>
      <div className={styles.appBody}>
        <SideBar />
        <Chat />
      </div>
    </div>
  )
}

export default App
