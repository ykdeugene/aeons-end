import { useEffect, useState } from "react"

function App() {
  const [turnOrderDeck, setTurnOrderDeck] = useState([
    "Player 1 ",
    "Player 2 ",
    "Player 3 ",
    "Player 4 ",
    "Nemesis ",
    "Nemesis ",
  ])
  const [turnOrderHistory, setTurnOrderHistory] = useState([])
  const [cardDraw, setCardDraw] = useState(0)

  function shuffleTO() {
    var newTurnOrderDeck = [...turnOrderDeck]
    newTurnOrderDeck.sort(() => Math.random() - 0.5)
    console.log(newTurnOrderDeck)
    setTurnOrderDeck(newTurnOrderDeck)
  }

  function nextTurn() {
    var nextCard = turnOrderHistory.concat(turnOrderDeck[cardDraw])
    setTurnOrderHistory(nextCard)
    card()
  }

  function card() {
    if (cardDraw + 1 > 5) {
      setCardDraw(0)
    } else {
      setCardDraw(cardDraw + 1)
    }
  }

  useEffect(() => {}, [turnOrderDeck])

  // HTML
  return (
    <div>
      <div>Card Draw: {cardDraw}</div>
      <div>Turn Order Deck: {turnOrderDeck}</div>
      <div>Turn Order History: {turnOrderHistory}</div>
      <button onClick={nextTurn}>Next Turn</button>
      <button onClick={shuffleTO}>Shuffle TurnOrderDeck</button>
    </div>
  )
}

export default App

/*
Main Function:
1. Decide the number of players
2. Shuffle the turn order deck
3. Display (permanently) the players' turns in the order
4. Display the history of orders in the particular turn
5. Reshuffle the turn order deck

Functions:
1. Move top card to bottom
2. Reveal top card of turn order deck (but not next turn yet)
3. Shuffle player/nemesis turn back into turn order deck

Others to display:
- gravehold health
- nemesis health
- players health

*/
