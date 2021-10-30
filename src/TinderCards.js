import { SwipeableDrawer } from "@material-ui/core";
import React, { useState } from "react";
import TinderCard from "react-tinder-card";
import "./Tindercards.css";

function TinderCards() {
  const [people, setPeople] = useState([
    {
      name: "Tonny",
      Age: "29",
      url: "https://scontent-cdg2-1.xx.fbcdn.net/v/t1.18169-9/14656260_1137275202992926_8084418600837470824_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=174925&_nc_ohc=HSAwCPQ0jrkAX9Bj_E0&_nc_ht=scontent-cdg2-1.xx&oh=8fd78832df5e476944513dfe4cac171a&oe=61A4B7B4",
    },

    {
      name: "Ntambaazi",
      Age: "31",
      url: "https://scontent-cdg2-1.xx.fbcdn.net/v/t1.18169-9/14656260_1137275202992926_8084418600837470824_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=174925&_nc_ohc=HSAwCPQ0jrkAX9Bj_E0&_nc_ht=scontent-cdg2-1.xx&oh=8fd78832df5e476944513dfe4cac171a&oe=61A4B7B4",
    },
  ]);

  const swiped = (direction, nameToDelete) => {
    console.log("removing " + nameToDelete);
    //setLastDirection(direction);
  };

  const outOfFrame = (name) => {
    console.log(name + " left the screen!");
  };
  return (
    <div className="tinderCards">
      <div className="tinderCards__cardContainer ">
        {people.map((person) => (
          <TinderCard
            className="swipe"
            key={person.name}
            preventSwipe={["up", "down"]}
            onSwipe={(dir) => swiped(dir, person.name)}
            onCardLeftScreen={() => outOfFrame(person.name)}
          >
            <div
              style={{ backgroundImage: `url(${person.url})` }}
              className="cards"
            >
              <h3>{person.name}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
}

export default TinderCards;
