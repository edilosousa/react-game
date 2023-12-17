import React from "react";
import Hero from "../Hero";
import { GAME_SIZE } from "../../settings/constants";
import MiniDemon from "../MiniDemon";
import Demon from "../Demon";
import Trap from "../Trap";

const Board: React.FC = () => {

    return (
        <div>
            <Hero />
            <MiniDemon />
            <Demon />
            <Trap />
            <img src="./assets/tileset.gif" style={{ width: GAME_SIZE, height: GAME_SIZE }} alt="" />
        </div>
    )
}

export default Board;