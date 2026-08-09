import TicketNum from './TicketNum';

export default function TicketNum({ num }) {
  return (
    <div className="ticket">
        <p>Ticket Numbers: </p>
            {ticket.map((n, index) => (
                <TicketNum key={index} num={n} />
            ))} 
    </div>
  )
}