import Card from "./Card";
import resdata from "../utils/mock";


const Body = () => {
    return (
      <div className="body">
        <div className="search-bar">search</div>
        <div className="res-cont">
          {resdata.map((restaurant) => (
            <Card key={restaurant.id} reslist={restaurant} />
          ))}
        </div>
      </div>
    );
  };

export default Body;