import React, { useEffect, useState } from 'react'
import styled, {keyframes} from 'styled-components'

const p1Walk = keyframes`
0% {background-image: url('./test/P1/p1_walk01.png')}
9% {background-image: url('./test/P1/p1_walk02.png')}
18% {background-image: url('./test/P1/p1_walk03.png')}
27% {background-image: url('./test/P1/p1_walk04.png')}
36% {background-image: url('./test/P1/p1_walk05.png')}
45% {background-image: url('./test/P1/p1_walk06.png')}
54% {background-image: url('./test/P1/p1_walk07.png')}
63% {background-image: url('./test/P1/p1_walk08.png')}
72% {background-image: url('./test/P1/p1_walk09.png')}
81% {background-image: url('./test/P1/p1_walk10.png')}
100% {background-image: url('./test/P1/p1_walk11.png')}

`
const p2Walk = keyframes`
0% {background-image: url('./test/P2/p2_walk01.png')}
9% {background-image: url('./test/P2/p2_walk02.png')}
18% {background-image: url('./test/P2/p2_walk03.png')}
27% {background-image: url('./test/P2/p2_walk04.png')}
36% {background-image: url('./test/P2/p2_walk05.png')}
45% {background-image: url('./test/P2/p2_walk06.png')}
54% {background-image: url('./test/P2/p2_walk07.png')}
63% {background-image: url('./test/P2/p2_walk08.png')}
72% {background-image: url('./test/P2/p2_walk09.png')}
81% {background-image: url('./test/P2/p2_walk10.png')}
100% {background-image: url('./test/P2/p2_walk11.png')}
`

const PlayerOne = styled.div `
height: 100px;  
width: 100px;   
position: fixed;
background-image: ${props => props.vegOrNot === 1 ? "url('./test/P1/p1_walk01.png')" : "url('./test/P2/p2_walk01.png')"} ;
background-size: contain;
background-repeat: no-repeat;
transform: scaleX(${(props) => props.mirror});
animation: ${(props) => {
    if (!props.anim && props.vegOrNot === 1) {
        return p1Walk
    } else if( !props.anim && props.vegOrNot === 2) {
        return p2Walk
    } else {
        return false
    }
}} 1s linear infinite forwards;
top: 400px;
left: 200px;
z-index: 6;
opacity: ${props => props.oppacity};
`



const Player = (props) => {
    const [ animHandl, setAnimHandle ] = useState(true)
    const [ mirror, setMirror ] = useState(1) 
    const [ oppac, setOppac ] = useState(0)
   
  
    useEffect(() => {

        window.addEventListener('keydown', (e) => {
            e.key !== 'ArrowRight' || setAnimHandle(false) 
            e.key !== 'ArrowLeft' || setAnimHandle(false) 
            e.key !== 'ArrowRight' || setMirror(1) 
            e.key !== 'ArrowLeft' || setMirror(-1)
        });
        window.addEventListener('keyup', e => {setAnimHandle(true)});
        
        
    }, [])

    useEffect(()=> {
        window.addEventListener('keydown', (e) => {
            e.key !== 'Enter' || setOppac(1);    
        })
        return window.removeEventListener('keydown', (e) => {
            e.key !== 'Enter' || setOppac(1);   });

    })
    
    
    return(
        <div>
            <PlayerOne anim={animHandl} mirror={mirror} className={mirror} oppacity={oppac} vegOrNot={props.vegan}/>
        </div>
            
    )
}




export default Player;