
const Card = (props) => {
    const { reslist } = props;
    const { resname, cusion, resrating, time, resimg } = reslist;
    return (
      <div className="card">
        <img className="food" src={resimg}></img>
        <div className="items">
          <h3>{resname}</h3>
          <h4>{cusion}</h4>
          <div className="rating">
            <h4>{resrating}</h4>
            <h4>{time}</h4>
          </div>
        </div>
      </div>
    );
  };

export default Card;