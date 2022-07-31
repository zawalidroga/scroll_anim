import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";

const Container = styled.div`
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500&display=swap');


  width: 300px;
  height: 140px;
  position: fixed;
  top: 360px;
  left: calc(50vw - 150px);
  z-index: 6;
  display: grid;
  grid-template-rows: 20px 20px 100px;
  grid-template-columns: 50% 50%;
  justify-content: space-between;
  visibility: ${props => props.hidden};

  .arrow {
    width: 20px;
    height: 20px;
    background-image: url("./test/others/hud_gem_red.png");
    background-size: contain;
    background-repeat: no-repeat;
    grid-column: ${props => props.choose} / span 1;
    grid-row: 1 / span 1;
    justify-self: center;
  }
  span{
      font-family: 'Roboto';
      font-size: medium;
      color: white;
      letter-spacing: 2px;
      text-transform: uppercase;

  }
  .player-title {
    grid-column: 1 / span 1;
    grid-row: 2 / span 1;
    justify-self: center;

  }
  .vegan-player-title {
    grid-column: 2 / span 1;
    grid-row: 2 / span 1;
    justify-self: center;
  }
  .player {
    height: 100px;
    width: 72px;
    background-image: url("./test/P1/p1_walk01.png");
    background-size: contain;
    background-repeat: no-repeat;
    grid-column: 1 / span 1;
    grid-row: 3 / span 1;
    justify-self: center;
  }

  .vegan-player {
    height: 100px;
    width: 72px;
    background-image: url("./test/P2/p2_walk01.png");
    background-size: contain;
    background-repeat: no-repeat;
    grid-column: 2 / span 1;
    grid-row: 3 / span 1;
    justify-self: center;
  }
`;


const VeganOrNot = (props) => {
    const [ playerNb, setPlayerNb ] = useState(1);
    const [ hideComponent, setHideComponent ] = useState('visible');
    
    const playerChoser = (e) => {
      e.key !== 'ArrowRight' || setPlayerNb(2);
      e.key !== 'ArrowLeft' || setPlayerNb(1);
  }

    const hideComponentMaker = (e) => {
      if ( e.key === 'Enter') {
        setHideComponent('hidden')
        props.vegan(playerNb)
    }}

    useEffect(() => {
        window.addEventListener('keydown', playerChoser);
        window.addEventListener('keydown', hideComponentMaker);
    })
    
  return (
    <Container choose={playerNb} hidden={hideComponent} >
      <div className="arrow"></div>
      <span className="player-title">meateater</span>
      <span className="vegan-player-title">vegan</span>
      <div className="player"></div>
      <div className="vegan-player"></div>
    </Container>
  );
};

export default VeganOrNot;
