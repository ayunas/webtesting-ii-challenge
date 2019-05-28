import React from 'react';

function Display(props) {
    return (
        <>
            <header>Scoreboard : </header>

            <div>{props.hits} Hits</div>
            <div>{props.strikes} Strikes</div>
            <div>{props.fouls} Fouls</div>
            <div>{props.balls} Balls</div>
        </>
    )
}

export default Display;

