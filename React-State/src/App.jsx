import './App.css'
import Lottery from './Lottery'
import Ticket from './TicketNum'

function App() {
  return (
    <>
      <Ticket num={[4, 2, 9]} />
      {/* <TicketNum num={4} />
      <TicketNum num={2} /> */}
    </>
  )
}

export default App
