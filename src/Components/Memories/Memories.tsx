import memoriesCSS from "./../Memories/Memories.module.css"
import memoriesImage1 from "./../../assets/travelport1.jpg"
import memoriesImage2 from "./../../assets/travelport2.jpg"
import memoriesImage3 from "./../../assets/travelport4.jpg"
import memoriesImage4 from "./../../assets/travelport3.jpg"
import memoriesImage5 from "./../../assets/travelport5.jpg"
import memoriesImage6 from "./../../assets/travelport6.jpg"
import memoriesImage7 from "./../../assets/travelport7.jpg"

export function Memories() {
  return (
    <div className={`${memoriesCSS.Memories_wrapper} section`}>
      <div className={memoriesCSS.MemoriesCard}>
        <img src={memoriesImage1} alt="Memories-img"/>
        <div className={memoriesCSS.content}>
          <h3>Small Groups Depurtures</h3>
          <a href="#">View Tours</a>
        </div>
      </div>
      <div className={memoriesCSS.MemoriesCard}>
        <img src={memoriesImage2} alt="Memories-img"/>
        <div className={memoriesCSS.content}>
          <h3>Affordable Dreams</h3>
          <a href="#">View Tours</a>
        </div>
      </div>
      <div className={memoriesCSS.MemoriesCard}>
        <img src={memoriesImage3} alt="Memories-img"/>
        <div className={memoriesCSS.content}>
          <h3>Undiscovers Tours</h3>
          <a href="#">View Tours</a>
        </div>
      </div>
      <div className={memoriesCSS.MemoriesCard}>
        <img src={memoriesImage4} alt="Memories-img"/>
        <div className={memoriesCSS.content}>
          <h3>Let Our Expert Pan <br/> Your 2024 Journey</h3>
          <button href="#">View Tours</button>
        </div>
      </div>
      <div className={memoriesCSS.MemoriesCard}>
        <img src={memoriesImage5} alt="Memories-img"/>
        <div className={memoriesCSS.content}>
          <h3>Religious Tours</h3>
          <a href="#">View Tours</a>
        </div>
      </div>
      <div className={memoriesCSS.MemoriesCard}>
        <img src={memoriesImage6} alt="Memories-img"/>
        <div className={memoriesCSS.content}>
          <h3>Solo Travel</h3>
          <a href="#">View Tours</a>
        </div>
      </div>
      <div className={memoriesCSS.MemoriesCard}>
        <img src={memoriesImage7} alt="Memories-img"/>
        <div className={memoriesCSS.content}>
          <h3>Private Touring</h3>
          <a href="#">View Tours</a>
        </div>
      </div>
    </div>
  );
}
