import React from 'react';

function Display(props) {
    return (
        <>
            <header>
                <div>Sccoreboard</div>
            </header>
            <div className="scoreboard">
                <div>{props.hits} Hits</div>
                <div>{props.strikes} Strikes</div>
                <div>{props.fouls} Fouls</div>
                <div>{props.balls} Balls</div>
            </div>
        </>
    )
}

export default Display;

