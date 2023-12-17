import React from "react";
import './index.css'
import { TILE_SIZE } from "../../settings/constants";

const Hero: React.FC = () => {

    return (
        <div style={{
            width: TILE_SIZE, 
            height: "100px", 
            position:"absolute",
            bottom:TILE_SIZE * 2,
            left:TILE_SIZE * 2,
            backgroundImage: "url(./assets/HERO.png)",
            backgroundRepeat: "no-repeat", 
            animation: "hero-animation 1s steps(4) infinite"
        }}></div>
    )
}

export default Hero;