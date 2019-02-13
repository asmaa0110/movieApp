import React from "react";
import "./moviecard.css";

function Stars(props) {
  let stars = ("*".repeat(props.rank) + "00000").substr(0, 5);

  return (
    <div>
      {" "}
      {stars.split("").map((el, i) => {
        if (el === "*") {
          return <i class="fas fa-star"> </i>;
        } else {
          return <i class="far fa-star"> </i>;
        }
      })}{" "}
    </div>
  );
}
const MovieCard = props => {
  return (
    <div className="moviecard">
      <div className="boxes">
        <img className="images" src={props.Movies.image} />,{" "}
        <h1 className="title"> {props.Movies.name} </h1>,{" "}
        <Stars className="rank" rank={props.Movies.ranking} />{" "}
      </div>{" "}
    </div>
  );
};

export default MovieCard;
