import React , { useState, useContext, createContext }from 'react';
import ReactDOM from 'react-dom';

import {Container, Button, Overlay, Inner, Close } from './styles/player';

export const PLayerContext = createContext();

export default function Player({children, ...resProps}){
    const [showPlayer, setShowPlayer] = useState(false);

    return (
        <PLayerContext.Provider value={{showPlayer, setShowPlayer}}>
            <Container {...resProps}>
                {children}
            </Container>
        </PLayerContext.Provider>
    )
}

Player.Video = function PlayerVideo({src, ...resProps}){
    const { showPlayer, setShowPlayer } = useContext(PLayerContext);
    return showPlayer ? ReactDOM.createPortal(
                                            <Overlay onClick={() => setShowPlayer(false)}>
                                                <Inner>
                                                    <video id='netflix-player' autoPlay loop>
                                                        <source  src={src} type='video/mp4' />
                                                    </video>
                                                    <Close><img src='images/home/close.png'></img></Close>
                                                </Inner>
                                            </Overlay>, document.body) : null
}

Player.Button = function PlayerButton({...resProps}){
    const { showPlayer, setShowPlayer } = useContext(PLayerContext);
    return <Button onClick={()=> {
       setShowPlayer(!showPlayer) 
    }}>Play</Button>
}