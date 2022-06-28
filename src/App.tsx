import React from "react"
import styles from "./App.module.css"
import SideBar from "./components/SideBar/SideBar"
import Chat from "./components/Chat/Chat"


function App() {


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
