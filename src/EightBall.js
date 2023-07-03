import React, { useState } from "react";

const choices =     [
    { msg: "It is certain.", color: "green" },
    { msg: "It is decidedly so.", color: "green" },
    { msg: "Without a doubt.", color: "green" },
    { msg: "Yes - definitely.", color: "green" },
    { msg: "You may rely on it.", color: "green" },
    { msg: "As I see it, yes.", color: "green" },
    { msg: "Most likely.", color: "green" },
    { msg: "Outlook good.", color: "green" },
    { msg: "Yes.", color: "green" },
    { msg: "Signs point to yes.", color: "goldenrod" },
    { msg: "Reply hazy, try again.", color: "goldenrod" },
    { msg: "Ask again later.", color: "goldenrod" },
    { msg: "Better not tell you now.", color: "goldenrod" },
    { msg: "Cannot predict now.", color: "goldenrod" },
    { msg: "Concentrate and ask again.", color: "goldenrod" },
    { msg: "Don't count on it.", color: "red" },
    { msg: "My reply is no.", color: "red" },
    { msg: "My sources say no.", color: "red" },
    { msg: "Outlook not so good.", color: "red" },
    { msg: "Very doubtful.", color: "red" },
];

function random(choices) {
    const randomIndex = Math.floor(Math.random() * choices.length);
    const item = choices[randomIndex];
    return item;
};


const EightBall = (props) => {
    const [color, setColor] = useState("black");
    const [msg, setMsg] = useState("Think of a question");

    function handleClick() {
        let answer = random(choices);
        setColor(answer.color)
        setMsg(answer.msg)
    };

    const ballcolor = {
        backgroundColor: color,
        borderRadius: "50%",
        height: "1000px",
        width: "1000px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer" 
    };

    const textcolor = {
        color: "white",
    }

    return (
        <div style={ballcolor} onClick={handleClick}>
            <h1 style={textcolor}>{ msg }</h1>
        </div>
    );
}

export default EightBall;