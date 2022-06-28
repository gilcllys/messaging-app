import React from "react"
import styles from "./App.module.css"
import SideBar from "./components/SideBar"


function App() {


  return (
    <div className={styles.App}>
      <div className={styles.appBody}>
        <SideBar />
      </div>
    
    </div>
  )
}

export default App
