// Write your code here.
import './index.css'
const EmojiCard = props => {
  const {emojiItemDetails, clickEmoji} = props
  const {emojiName, emojiUrl, id} = emojiItemDetails

  const onClickEmojiCard = () => {
    clickEmoji(id)
  }
  return (
    <li className="emoji-item-container">
      <button type="button" className="emoji-btn" onClick={onClickEmojiCard}>
        <img src={emojiUrl} className="emoji-icon" alt={emojiName} />
      </button>
    </li>
  )
}

export default EmojiCard
