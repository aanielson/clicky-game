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

  //reset all character clicked to false and reset score
  restart = () => {
    this.state.cards.forEach((pokemon) => (
      pokemon.clicked = false
    ));
    this.setState({
      score: 0,
      message: "Gotta catch'em ALL!"
    });
  };

  //reset game (like with restart) and tell user that they won
  winner = () => {
    this.state.cards.forEach((pokemon) => (
      pokemon.clicked = false
    ));
    this.setState({
      score: 0,
      message: "Nice Pokédex!"
    });
  };

  //manage click events to shuffle display and update score
  handleClick = id => {
    const found = this.state.cards.find((pokemon) => pokemon.id === id)
    if (found.clicked === false) {
      found.clicked = true;
      this.state.cards.sort(() => Math.random() - 0.5);
      if (this.state.score + 1 > this.state.highScore) {
        this.setState({
          highScore: this.state.highScore + 1
        });
      }
      if (this.state.score + 1 === 12) {
        this.winner();
      } else {
        this.setState({
          score: this.state.score + 1,
          message: "Excellent catch!"
        });
      }
    } else {
      this.state.cards.sort(() => Math.random() - 0.5);
      this.restart();
    }
  }

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
              click={this.handleClick}
            />
          ))}
        </Wrapper>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;

