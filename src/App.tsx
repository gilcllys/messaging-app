import React from "react"
import styles from "./App.module.css"
import SideBar from "./components/SideBar/SideBar"
import Chat from "./components/Chat/Chat"
import Pusher from "pusher-js"
import { Sync } from "@mui/icons-material"

function App() {
  
  const [messages, setMessages] = React.useState([])

  React.useEffect(()=>{
    async function getData(){
      const data =  await fetch('https://messaging-mern-app.herokuapp.com/messages/sync')
      const json = await data.json()
      setMessages(json)
    }
    getData()
  },[])
  React.useEffect(()=>{
    const pusher = new Pusher(import.meta.env.VITE_PUSHER_KEY,{
      cluster:'sa1'
    })
    const channel = pusher.subscribe('message')
    channel.bind('inserted', (data: any)=>{
      setMessages([...messages, data])
    })
    return()=>{
      channel.unbind_all()
      channel.unsubscribe()
    }
  },[messages])
  return (
    <div className={styles.App}>
      <div className={styles.appBody}>
        <SideBar />
        <Chat messages={messages} />
      </div>
    </div>
  )
}

export default App
