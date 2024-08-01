// Write your code here.
import './index.css'

const NavBar = props => {
  const {topScore, currentScore, isGameInProgress} = props
  return (
    <nav className="navbar-container">
      <div className="emoji-logo-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png "
          className="emoji-logo"
          alt="emoji logo"
        />
        <h1 className="game-name">Emoji Game</h1>
      </div>
      {isGameInProgress && (
        <div className="emoji-data-container">
          <p className="score">Score: {currentScore}</p>
          <p className="top-score">Top Score: {topScore}</p>
        </div>
      )}
    </nav>
  )
}

export default NavBar
