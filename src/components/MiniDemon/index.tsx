import React from "react";
import './index.css'
import { TILE_SIZE } from "../../settings/constants";

const MiniDemon: React.FC = () => {

    return (
        <div style={{
            width: TILE_SIZE, 
            height: "100px", 
            position:"absolute",
            bottom:TILE_SIZE * 10,
            left:TILE_SIZE * 5,
            backgroundImage: "url(./assets/MINI-DEMON.png)",
            backgroundRepeat: "no-repeat", 
            animation: "miniDemon-animation 1s steps(4) infinite"
        }}></div>
    )
}

export default MiniDemon;