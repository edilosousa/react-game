import React from "react";
import './index.css'
import { TILE_SIZE } from "../../settings/constants";

const Trap: React.FC = () => {

    return (
        <div style={{
            width: TILE_SIZE, 
            height: "100px", 
            position:"absolute",
            bottom:TILE_SIZE * 10,
            left:TILE_SIZE * 5,
            backgroundImage: "url(./assets/TRAP.png)",
            backgroundRepeat: "no-repeat", 
            animation: "trap-animation 1s steps(4) infinite"
        }}></div>
    )
}

export default Trap;