import { useState } from 'react'
import './Lottery.css'
import { genTicket } from './helper'

export default function Lottery(n, winningSum) {
    let [ticket, setTicket] = useState(genTicket(3))
    let isWinning = sum(ticket) === winningSum
    let buyTicket = () => {
        setTicket(genTicket(n))
    }

    return (
        <div >
            <h1>Lottery Game!</h1>
            <Ticket ticket={ticket} />
            <button onClick={buyTicket}>New Ticket</button>
            <h3>{isWinning ? 'Congratulations! You won!' : 'Keep trying!'}</h3>
        </div>
    )
}
