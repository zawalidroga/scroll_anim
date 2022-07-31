import React, { useEffect, useState } from "react";
import Player from "./components/player";
import styled from 'styled-components';
import Buildings from "./components/building";
import VeganOrNot from "./components/veganOrNot";
import Recipe from "./components/recipe";


const buildNum = 15;

const Container = styled.div`
position: relative;
//overflow-y: hidden;
`

const BackgroundCity = styled.div`
background-image: url('test/BGC/bgSky.png');
background-size: 810px;
background-repeat: repeat-x; 
background-attachment: fixed;
width: 5000px;
height: 550px;
margin: 0;
position: relative;
display: flex;
flex-direction: column;
justify-content: flex-end;
`

const BuildingContainer = styled.div`
width: inherit;
height: 300px;
position: absolute;
margin: 0;
padding: 0;
bottom: 64px;
display: inline-grid;
grid-template-columns: repeat(${buildNum}, ${100/buildNum}% [col-start]);

`

const Platform = styled.div`
background-image: url('test/bgc/city/platform1.png');
background-size: 62px;
background-repeat: repeat-x;
width: inherit;
height: 62px;
`

const Wall =styled.div`
background-image: url('test/bgc/city/wall.png');
background-size: 62px;
background-repeat: repeat-x;
width: inherit;
height: 62px;
`

const City = styled.div`
background-image: url('test/bgc/city/cityBg.png');
background-size: 573px;
background-repeat: repeat-x;
width: inherit;
height: 282px;
`


function App() {
  const world = [];
  const [ vegan, setVegan ] = useState(1)
  
  const worldMaker = ( number) => {
      for(let i = 0; i < number; i++) {
      i === 3 || i===8 || i === 12? world.push(<div style={{backgroundColor: 'red', height: '300px', width: '200px'}}></div>) : world.push(<Buildings />)
    }
    return world;
  }


  const isVegan = (props) => {
    setVegan(props)
  }



  return (
    <Container >
      <BackgroundCity >
        <BuildingContainer>
          {worldMaker(buildNum)}
        </BuildingContainer>
        <City />
        <Wall />
        <Platform />
      </BackgroundCity>
      <Recipe />
      <VeganOrNot vegan={isVegan}/>
      <Player vegan={vegan}/>
    </Container>
  );
}

export default App;
