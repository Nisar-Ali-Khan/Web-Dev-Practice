import { useState } from 'react'
import './Lottery.css'
import { genTicket } from './helper'

export default function Lottery({ n = 3, winningSum = 15 } = {}) {
    const [ticket, setTicket] = useState(genTicket(n))

    const ticketSum = ticket.reduce((s, v) => s + v, 0)
    const isWinning = ticketSum === winningSum

    const buyTicket = () => setTicket(genTicket(n))

    return (
        <div className="lottery-wrapper">
            <h1>Lottery Game!</h1>
            <div className="ticket">
                {ticket.map((num, i) => (
                    <span key={i}>{num}</span>
                ))}
            </div>
            <button className="lottery-button" onClick={buyTicket}>New Ticket</button>
            <h3>{isWinning ? 'Congratulations! You won!' : 'Keep trying!'}</h3>
        </div>
    )
}
