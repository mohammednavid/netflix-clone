import React from "react";
import "./Home.css";
import Banner from "./Banner";
import Card from "./Card";

function Home() {
  return (
    <div className="home">
      <Banner />
      <div className="home__section">
        <Card
          src="https://a0.muscache.com/im/pictures/15159c9c-9cf1-400e-b809-4e13f286fa38.jpg?im_w=240"
          title="Unique stays"
          description="Spaces that are more than just a place to sleep."
        />
        <Card
          src="https://a0.muscache.com/im/pictures/4a2f688e-0b33-4feb-932f-494b9a37348c.jpg?im_w=240"
          title="Online Experiences"
          description="Unique activities we can do together."
        />
        <Card
          src="https://a0.muscache.com/im/pictures/fdb46962-10c1-45fc-a228-d0b055411448.jpg?im_w=240"
          title="Entire homes"
          description="Comfertable private places, with room."
        />
      </div>
      <div className="home__section">
        <Card
          src="https://a0.muscache.com/im/pictures/3a6a8b43-770d-4d1a-abc5-a98ecdbecbc8.jpg?im_w=480"
          title="Unique glamping experience"
          description="La casa del árbol Pinochueco es un lugar distinto en el que podrás disfrutar de un descanso entre los árboles."
          price="₹14,180/night"
        />
        <Card
          src="https://a0.muscache.com/im/pictures/3ff78c0f-2e86-40af-ae7e-1e06337a33bc.jpg?im_w=480"
          title="Bird Glamping"
          description="La casa del árbol Pinochueco es un lugar distinto en el que podrás disfrutar de un descanso entre los árboles."
          price="₹9,198/night"
        />
        <Card
          src="https://a0.muscache.com/im/pictures/d3a2a712-cf11-4886-925b-1290f0e0fb1a.jpg?im_w=480"
          title="Casa del Árbol Pinochueco"
          description="La casa del árbol Pinochueco es un lugar 
          distinto en el que podrás disfrutar de un descanso entre los árboles."
          price="₹4,390/night"
        />
      </div>
    </div>
  );
}

export default Home;
