// Write your code here.

import './index.css'

const LOSE_IMAGE = 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'
const WIN_IMAGE = 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'

const WinOrLoseCard = props => {
  const {isWon, score, onClickPlayAgain} = props
  const imageUrl = isWon ? WIN_IMAGE : LOSE_IMAGE
  const gamestatus = isWon ? 'You Won' : 'You Lose'
  const scorelabel = isWon ? 'Best Score' : 'Score'
  return (
    <div className="win-or-lose-card">
      <div className="details-section">
        <h1 className="game-status">{gamestatus}</h1>
        <p className="current-score-label">{scorelabel}</p>
        <p className="current-score-">{score}/12</p>
      </div>
      <button
        type="button"
        className="play-again-btn"
        onClick={onClickPlayAgain}
      >
        Play Again
      </button>
      <div className="image-section">
        <img className="win-or-lose" src={imageUrl} alt="win or lose" />
      </div>
    </div>
  )
}

export default WinOrLoseCard
