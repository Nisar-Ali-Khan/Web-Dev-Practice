import { useState } from 'react'
import './Lottery.css'
import { genTicket } from './helper'

export default function Lottery() {
    let [ticket, setTicket] = useState(genTicket(3))
    let isWinning = ticket.reduce((a, b) => a + b, 0) === 15
    let buyTicket = () => setTicket(genTicket(3))

    return (
        <div className="lottery-wrapper">
            <h1>Lottery Game!</h1>
            <div className="ticket">
                <span>{ticket[0]}</span>
                <span>{ticket[1]}</span>
                <span>{ticket[2]}</span>
            </div>
            <button onClick={buyTicket}>New Ticket</button>
            <h3>{isWinning ? 'Congratulations! You won!' : 'Keep trying!'}</h3>
        </div>
    )
}
