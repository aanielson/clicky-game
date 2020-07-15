import React, { Component } from "react";
import Wrapper from "./components/Wrapper";
import Nav from "./components/Nav";
import Header from './components/Header';
// import Score from "./components/Score"
import FriendCard from "./components/ImgCard";
import Footer from './components/Footer';

import cards from "./cards.json";
import "./App.css";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    score: 0,
    highScore: 0,
    message: "Click an image to begin!",
    cards
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <div>
        <Nav message={this.state.message} score={this.state.score} highScore={this.state.highScore}> </Nav>
        <Header></Header>
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
        <Footer></Footer>
      </div>
    );
  }
}

export default App;

