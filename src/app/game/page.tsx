"use client"

import React from "react";
import {Wrapper} from "./page.styled"
import Navbar from "@/components/layout/header";
import GameItem from "./GameItem";

const Game = () => {
    return <Wrapper>
        <Navbar />
        <div className="container">
            <GameItem />
        </div>
    </Wrapper>
}

export default Game;