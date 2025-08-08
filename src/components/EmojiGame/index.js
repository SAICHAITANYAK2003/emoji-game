/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.

import {Component} from 'react'
import EmojiCard from '../EmojiCard'
import NavBar from '../NavBar'
import WinOrLoseCard from '../WinOrLoseCard'
import './index.css'

class EmojiGame extends Component {
  state = {
    clickedEmojilist: [],
    isGameInProgress: true,
    topScore: 0,
  }

  // Shuffling function
  shuffledEmojisList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  // Handle clicking an emoji
  clickEmoji = id => {
    const {emojisList} = this.props
    const {clickedEmojilist} = this.state

    const isEmojiAlreadyClicked = clickedEmojilist.includes(id)

    if (isEmojiAlreadyClicked) {
      this.finishGameandSetTopScore(clickedEmojilist.length)
    } else {
      const updatedClickedList = [...clickedEmojilist, id]

      if (updatedClickedList.length === emojisList.length) {
        // All emojis clicked — win
        this.finishGameandSetTopScore(emojisList.length)
      } else {
        this.setState({clickedEmojilist: updatedClickedList})
      }
    }
  }

  // End game & update top score
  finishGameandSetTopScore = currentScore => {
    const {topScore} = this.state
    let newTopScore = topScore

    if (currentScore > topScore) {
      newTopScore = currentScore
    }

    this.setState({
      topScore: newTopScore,
      isGameInProgress: false,
    })
  }

  // Restart game
  restartGame = () => {
    this.setState({
      clickedEmojilist: [],
      isGameInProgress: true,
    })
  }

  // Render emojis
  renderEmojiCards = () => {
    const shuffledList = this.shuffledEmojisList()
    return (
      <ul className="emoji-shuffled-list">
        {shuffledList.map(eachEmojiItem => (
          <EmojiCard
            emojiItemDetails={eachEmojiItem}
            key={eachEmojiItem.id}
            clickEmoji={this.clickEmoji} // Now defined!
          />
        ))}
      </ul>
    )
  }

  // Render score card
  renderScoreCard = () => {
    const {emojisList} = this.props
    const {clickedEmojilist} = this.state
    const isWon = clickedEmojilist.length === emojisList.length

    return (
      <WinOrLoseCard
        isWon={isWon}
        score={clickedEmojilist.length}
        onClickPlayAgain={this.restartGame}
      />
    )
  }

  render() {
    const {clickedEmojilist, isGameInProgress, topScore} = this.state

    return (
      <div className="emoji-game-bg-container">
        <NavBar
          currentScore={clickedEmojilist.length}
          topScore={topScore}
          isGameInProgress={isGameInProgress}
        />
        <div className="emoji-game-body">
          {isGameInProgress ? this.renderEmojiCards() : this.renderScoreCard()}
        </div>
      </div>
    )
  }
}

export default EmojiGame
