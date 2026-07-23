import { useState } from "react"
import Auth from "../components/Auth"


function Home() {
  const [showAuth, setShowAuth] = useState(false)
  return (
    <div className="">
      <button onClick={()=> setShowAuth(true)}>Open</button>
      {showAuth && <Auth onClose={()=> setShowAuth(false)}/>}
    </div>
  )
}

export default Home
