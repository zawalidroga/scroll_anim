import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

const Bulding = styled.div`
background-image: url('test/BGC/city/${props => props.name}.png');
background-position: bottom;
background-repeat: no-repeat;
background-size: 150px;
height: 300px;
width: 150px;
z-index: 5;
bottom: 0;
justify-self: ${props => props.position};
`

const Buildings = () => {
    const buildingNamesHolder = ['building1', '2', '3', '4']
    return(
        <Bulding position={['start', 'end', 'center'][Math.floor(Math.random() * 3)]} name={buildingNamesHolder[Math.floor(Math.random()*4)]}/>
    )}

export default Buildings;