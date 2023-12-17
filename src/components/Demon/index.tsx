import React from "react";
import './index.css'
import { DEMON_TILE_SIZE, TILE_SIZE } from "../../settings/constants";

const Demon: React.FC = () => {

    return (
        <div style={{
            width: DEMON_TILE_SIZE, 
            height: DEMON_TILE_SIZE, 
            position:"absolute",
            bottom:TILE_SIZE * 3,
            left:TILE_SIZE * 12,
            backgroundImage: "url(./assets/DEMON.png)",
            backgroundRepeat: "no-repeat", 
            animation: "demon-animation 1s steps(4) infinite"
        }}></div>
    )
}

export default Demon;