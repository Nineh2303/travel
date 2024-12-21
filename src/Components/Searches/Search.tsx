import SearchCSS from "./../Searches/Search.module.css"
export function Search() {
  return (
    <div className={`${SearchCSS.search_wrapper} section`}>
      <h2>Popular Searches</h2>
      <div className={SearchCSS.Cards}>
        <div className={SearchCSS.card}>
          <i className="ri-search-line"/>
          <h3>Domestic Trips <span>See America In a New Light</span></h3>
        </div>
        <div className={SearchCSS.card}>
          <i className="ri-search-line"/>
          <h3>Vacation in 14 days<span>Limited Availability And Selling Fast </span></h3>
        </div>
        <div className={SearchCSS.card}>
          <i className="ri-search-line"/>
          <h3>Offer for traveling Groups<span>Save When you 9+ Guests</span></h3>
        </div>
        <div className={SearchCSS.card}>
          <i className="ri-search-line"/>
          <h3>Tour under $2000<span>Browse Our Value Vacation</span></h3>
        </div>
        <div className={SearchCSS.card}>
          <i className="ri-search-line"/>
          <h3>Pass Guests Benefits<span> Savings With Our Global Value Rewards</span></h3>
        </div>
        <div className={SearchCSS.card}>
          <i className="ri-search-line"/>
          <h3>Tour under $2000<span>Browse Our Value Vacation</span></h3>
        </div>
      </div>
    </div>
  );
}
