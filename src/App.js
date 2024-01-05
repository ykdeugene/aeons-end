import { useState } from "react"

function App() {
  const [turnOrderDeck, setTurnOrderDeck] = useState(
    ["Player 1", "Player 2", "Player 3", "Player 4", "Nemesis", "Nemesis"].sort(
      () => Math.random() - 0.5
    )
  )

  const [historyDeck, setHistoryDeck] = useState([])
  const [cardNow, setCardNow] = useState("")
  const [nextCard, setNextCard] = useState(turnOrderDeck[0])

  /**
   * - If no more cards can be drawn from turnOrderDeck:
   *    - cardNow is "No more Cards"
   * - Else:
   *    - Draws a card from the turnOrderDeck
   *    - Updates cardNow to turnOrderDeck[0]
   *    - Updates turnOrderDeck to remove cardNow
   *    - Updates nextCard to turnOrderDeck[0]
   *    - Updates HistoryDeck to include cardNow
   */
  function drawCard() {
    let closeDeck = [...turnOrderDeck]
    if (0 === closeDeck.length) {
      setCardNow("No more Cards")
    } else {
      let cardDrawn = closeDeck[0]
      setCardNow(cardDrawn)
      closeDeck.splice(0, 1)
      if (0 === closeDeck.length) {
        setNextCard("No more Cards")
      } else {
        setNextCard(closeDeck[0])
      }
      setTurnOrderDeck(closeDeck)

      let openDeck = [...historyDeck]
      openDeck.push(cardDrawn)
      setHistoryDeck(openDeck)
    }
  }

  /**
   * - Shuffles only the existing cards remaining in the turnOrderDeck
   * - Updates nextCard to turnOrderDeck[0]
   */
  function shuffleDeck() {
    let closeDeck = turnOrderDeck.sort(() => Math.random() - 0.5)
    setNextCard(closeDeck[0])
    setTurnOrderDeck(closeDeck)
  }

  /**
   * - Resets the turnOrderDeck with all 6 cards shuffled
   * - Updates nextCard to turnOrderDeck[0]
   */
  function resetDeck() {
    let closeDeck = [
      "Player 1",
      "Player 2",
      "Player 3",
      "Player 4",
      "Nemesis",
      "Nemesis",
    ].sort(() => Math.random() - 0.5)
    setTurnOrderDeck(closeDeck)
    setNextCard(closeDeck[0])
  }

  function debug() {
    console.log(turnOrderDeck)
  }

  // HTML
  return (
    <div>
      <div>historyDeck: {historyDeck}</div>
      <div>cardNow: {cardNow}</div>
      <div>nextCard: {nextCard}</div>
      <button onClick={drawCard}>Draw a Card</button>
      <button onClick={shuffleDeck}>Shuffle Deck</button>
      <button onClick={resetDeck}>Reset Deck</button>
      <button onClick={debug}>debug</button>
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
