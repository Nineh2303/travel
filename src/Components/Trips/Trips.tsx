import TripCSS from './../Trips/Trips.module.css'
import trip1 from "../../assets/Trips01.jpg"
import trip2 from "../../assets/Trips02.jpg"
import trip3 from "../../assets/Trips03.jpg"
import trip4 from "../../assets/Trips04.jpg"
import trip5 from "../../assets/Trips05.jpg"
import trip6 from "../../assets/Trips06.jpg"
import trip7 from "../../assets/Trips07.jpg"
import trip8 from "../../assets/Trips08.jpg"
export function Trips() {
  return (
    <div className={`${TripCSS.trips_wrapper} section `}>
      <h2>Popular Trips</h2>
      <div className={TripCSS.cards}>
        <div className={TripCSS.card}>
          <img src={trip1} alt=""/>
          <div className={TripCSS.TripContent}>
            <div className={TripCSS.rating}>
              <i className="ri-star-fill"/>
              <i className="ri-star-fill"/>
              <i className="ri-star-fill"/>
              <i className="ri-star-fill"/>
              <i className="ri-star-half-fill"/>
            </div>
            <h3>Australia Panorma</h3>
            <div className={TripCSS.TripDetails}>
              <span> <i className="ri-calendar-line"/> 7 Days </span>
              <span> <i className="ri-map-pin-line"/> 5 places </span>
              <span> <i className="ri-flag-line"/> Australia </span>
            </div>
            <div className={TripCSS.Pricing}>
              <span className={TripCSS.price}>$1.200</span>
              <button className={TripCSS.book}>Book Now</button>
            </div>
          </div>
        </div>
        <div className={TripCSS.card}>
          <img src={trip2} alt=""/>
          <div className={TripCSS.TripContent}>
            <div className={TripCSS.rating}>
              <i className="ri-star-fill"/>
              <i className="ri-star-fill"/>
              <i className="ri-star-fill"/>
              <i className="ri-star-fill"/>
              <i className="ri-star-half-fill"/>
            </div>
            <h3>Best of Spain</h3>
            <div className={TripCSS.TripDetails}>
              <span> <i className="ri-calendar-line"/> 5 Days </span>
              <span> <i className="ri-map-pin-line"/> 15 places </span>
              <span> <i className="ri-flag-line"/> Spain </span>
            </div>
            <div className={TripCSS.Pricing}>
              <span className={TripCSS.price}>$1.850</span>
              <button className={TripCSS.book}>Book Now</button>
            </div>
          </div>
        </div>
        <div className={TripCSS.card}>
          <img src={trip3} alt=""/>
          <div className={TripCSS.TripContent}>
            <div className={TripCSS.rating}>
              <i className="ri-star-fill"/>
              <i className="ri-star-fill"/>
              <i className="ri-star-fill"/>
              <i className="ri-star-fill"/>
              <i className="ri-star-half-fill"/>
            </div>
            <h3>Italian Island</h3>
            <div className={TripCSS.TripDetails}>
              <span> <i className="ri-calendar-line"/> 15 Days </span>
              <span> <i className="ri-map-pin-line"/> 8 places </span>
              <span> <i className="ri-flag-line"/> Italia </span>
            </div>
            <div className={TripCSS.Pricing}>
              <span className={TripCSS.price}>$1.100</span>
              <button className={TripCSS.book}>Book Now</button>
            </div>
          </div>
        </div>
        <div className={TripCSS.card}>
          <img src={trip4} alt=""/>
          <div className={TripCSS.TripContent}>
            <div className={TripCSS.rating}>
              <i className="ri-star-fill"/>
              <i className="ri-star-fill"/>
              <i className="ri-star-fill"/>
              <i className="ri-star-fill"/>
              <i className="ri-star-half-fill"/>
            </div>
            <h3>Canyonlands</h3>
            <div className={TripCSS.TripDetails}>
              <span> <i className="ri-calendar-line"/> 5 Days </span>
              <span> <i className="ri-map-pin-line"/> 8 places </span>
              <span> <i className="ri-flag-line"/> Canyonland </span>
            </div>
            <div className={TripCSS.Pricing}>
              <span className={TripCSS.price}>$2.100</span>
              <button className={TripCSS.book}>Book Now</button>
            </div>
          </div>
        </div>
        <div className={TripCSS.card}>
          <img src={trip5} alt=""/>
          <div className={TripCSS.TripContent}>
            <div className={TripCSS.rating}>
              <i className="ri-star-fill"/>
              <i className="ri-star-fill"/>
              <i className="ri-star-fill"/>
              <i className="ri-star-fill"/>
              <i className="ri-star-half-fill"/>
            </div>
            <h3>India</h3>
            <div className={TripCSS.TripDetails}>
              <span> <i className="ri-calendar-line"/> 10 Days </span>
              <span> <i className="ri-map-pin-line"/> 25 places </span>
              <span> <i className="ri-flag-line"/> India </span>
            </div>
            <div className={TripCSS.Pricing}>
              <span className={TripCSS.price}>$3.200</span>
              <button className={TripCSS.book}>Book Now</button>
            </div>
          </div>
        </div>
        <div className={TripCSS.card}>
          <img src={trip6} alt=""/>
          <div className={TripCSS.TripContent}>
            <div className={TripCSS.rating}>
              <i className="ri-star-fill"/>
              <i className="ri-star-fill"/>
              <i className="ri-star-fill"/>
              <i className="ri-star-fill"/>
              <i className="ri-star-half-fill"/>
            </div>
            <h3>France Discovery</h3>
            <div className={TripCSS.TripDetails}>
              <span> <i className="ri-calendar-line"/> 7 Days </span>
              <span> <i className="ri-map-pin-line"/> 5 places </span>
              <span> <i className="ri-flag-line"/> France </span>
            </div>
            <div className={TripCSS.Pricing}>
              <span className={TripCSS.price}>$1.200</span>
              <button className={TripCSS.book}>Book Now</button>
            </div>
          </div>
        </div>
        <div className={TripCSS.card}>
          <img src={trip7} alt=""/>
          <div className={TripCSS.TripContent}>
            <div className={TripCSS.rating}>
              <i className="ri-star-fill"/>
              <i className="ri-star-fill"/>
              <i className="ri-star-fill"/>
              <i className="ri-star-fill"/>
              <i className="ri-star-half-fill"/>
            </div>
            <h3>Japan in Work</h3>
            <div className={TripCSS.TripDetails}>
              <span> <i className="ri-calendar-line"/> 7 Days </span>
              <span> <i className="ri-map-pin-line"/> 4 places </span>
              <span> <i className="ri-flag-line"/> Japan </span>
            </div>
            <div className={TripCSS.Pricing}>
              <span className={TripCSS.price}>$2.000</span>
              <button className={TripCSS.book}>Book Now</button>
            </div>
          </div>
        </div>
        <div className={TripCSS.card}>
          <img src={trip8} alt=""/>
          <div className={TripCSS.TripContent}>
            <div className={TripCSS.rating}>
              <i className="ri-star-fill"/>
              <i className="ri-star-fill"/>
              <i className="ri-star-fill"/>
              <i className="ri-star-fill"/>
              <i className="ri-star-half-fill"/>
            </div>
            <h3>Explore Bali 10-Days tours</h3>
            <div className={TripCSS.TripDetails}>
              <span> <i className="ri-calendar-line"/> 10 Days </span>
              <span> <i className="ri-map-pin-line"/> 25 places </span>
              <span> <i className="ri-flag-line"/> Bali </span>
            </div>
            <div className={TripCSS.Pricing}>
              <span className={TripCSS.price}>$2.800</span>
              <button className={TripCSS.book}>Book Now</button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
