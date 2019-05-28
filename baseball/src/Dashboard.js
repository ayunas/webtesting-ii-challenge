import React from 'react';


function Dashboard(props) {

    return (
        <>
            <button onClick={props.hit}>Hit</button>
            <button onClick={props.strike}>Strike</button>
            <button onClick={props.foul}>Foul</button>
            <button onClick={props.ball}>Ball</button><br />
            <button onClick={props.reset}>Reset</button>
        </>
    )
}

export default Dashboard;


