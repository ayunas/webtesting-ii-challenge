import React from 'react';


function Dashboard(props) {

    return (
        <>
            <div>Let's play some baseball!</div>
            <button onClick={props.hit}>Hit</button>
            <button onClick={props.strike}>Strike</button>
            <button onClick={props.foul}>Foul</button>
            <button onClick={props.ball}>Ball</button>
        </>
    )

}

export default Dashboard;


