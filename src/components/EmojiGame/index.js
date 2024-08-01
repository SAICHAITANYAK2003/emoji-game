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
    topScore: 0,
    isGameInProgress: true,
  }
  resetGame = () => {
    this.setState({clickedEmojilist: [], isGameInProgress: true})
  }

  renderScoreCard = () => {
    const {emojisList} = this.props
    const {clickedEmojilist} = this.state
    const isWon = clickedEmojilist.length === emojisList.length
    return (
      <WinOrLoseCard
        isWon={isWon}
        onClickPlayAgain={this.resetGame}
        score={clickedEmojilist.length}
      />
    )
  }

  finishGameandSetTopScore = currentScore => {
    const {topScore} = this.state
    let newTopScore = topScore
    if (currentScore > topScore) {
      newTopScore = currentScore
    }
    this.setState({topScore: newTopScore, isGameInProgress: false})
  }
  

  shuffledEmojisList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }
  renderEmojiCards = () => {
    const getShuffledEmojislist = this.shuffledEmojisList()
    return (
      <ul className="emoji-shuffled-list">
        {getShuffledEmojislist.map(eachEmojiItem => (
          <EmojiCard
            emojiItemDetails={eachEmojiItem}
            key={eachEmojiItem.id}
            clickEmoji={this.clickEmoji}
          />
        ))}
      </ul>
    )
  }
  render() {
    const {topScore, clickedEmojilist, isGameInProgress} = this.state

    return (
      <div className="emojigame-container">
        <NavBar
          topScore={topScore}
          currentScore={clickedEmojilist.length}
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
