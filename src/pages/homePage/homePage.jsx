import SearchBar from "../../components/searchBar/SearchBar";
import "./homePage.scss";

function HomePage(){
     return (
        <div className="homepage">
           <div className="textContainer">
              <div className="wrapper">
              <h1 className="title">Find Real Estate & Get your Dream Home</h1>
              <p>Discover luxury properties in top locations.
                Personalized service to find your ideal home.
                 Start your journey with us today.</p>
                <SearchBar/>
                 <div className="boxes">
                    <div className="box">
                      <h1>16+</h1>
                      <h2>Years of Experience</h2>
                    </div>
                    <div className="box">
                      <h1>200</h1>
                      <h2>Award Gained</h2>
                    </div>
                    <div className="box">
                      <h1>1200+</h1>
                      <h2>Property Ready</h2>
                    </div>
                 </div>
              </div>
              
           </div>
           <div className="imgContainer">
            <img src="/bg.png" alt="heropng" />
           </div>
        </div>
     )
}
export default HomePage;