import React, {Component} from "react";
import FriendCard from "./components/ImgCard";
import Wrapper from "./components/Wrapper";
// import Scores from "./components/Scores";
import cards from "./cards.json";
import "./App.css";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    cards
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        {this.state.cards.map(card => (
          <FriendCard
            id={card.id}
            key={card.id}
            name={card.name}
            image={card.image}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;

