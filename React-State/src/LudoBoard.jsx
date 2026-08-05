import { useState } from 'react';

export default function LudoBoard() {

    let [moves, setMoves] = useState({blue: 0,  yellow: 0, green: 0,red: 0})
    let [arr, Setarr] = useState(["no moves yet"])

    let updateMoves = (color) => {
        console.log(`${color.charAt(0).toUpperCase() + color.slice(1)} Moves: ${moves[color]}`);
        setMoves({...moves, [color]: moves[color] + 1} );
    }

    Setarr([...arr, `Blue Moves = ${moves.blue}`, `Yellow Moves = ${moves.yellow}`, `Green Moves = ${moves.green}`, `Red Moves = ${moves.red}`])

return (
    <div>
        <p>Game Begins! </p> 
        <p>{arr}</p>
        <div className="board">
            <p>Blue Moves = {moves.blue} </p>
            <button style={{backgroundColor: 'lightblue'}} onClick={() => updateMoves('blue')}>+1</button>
            <p>Yellow Moves = {moves.yellow} </p>
            <button style={{backgroundColor: 'lightyellow'}} onClick={() => updateMoves('yellow')}>+1</button>
            <p>Green Moves = {moves.green} </p>
            <button style={{backgroundColor: 'lightgreen'}} onClick={() => updateMoves('green')}>+1</button>
            <p>Red Moves = {moves.red} </p>
            <button style={{backgroundColor: 'lightcoral'}} onClick={() => updateMoves('red')}>+1</button>
        </div>
    </div>
)
}
