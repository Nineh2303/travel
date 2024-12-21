import './App.css'
import Navbar from "./Components/Navbar/Navbar.tsx";
import {Header} from "./Components/Header/Header.tsx";
import {Memories} from "./Components/Memories/Memories.tsx";
import {Trips} from "./Components/Trips/Trips.tsx";
import {Search} from "./Components/Searches/Search.tsx";

function App() {

  return (
    <>
      <div className="main">
        <Navbar/>
        <Header/>
        <Memories/>
      </div>
      <Trips/>
      <Search/>
    </>
  )
}

export default App
