import './index.css'

const HistorySearchPage = props => {
  const {eachSuggestion, deleteHistoryFunction} = props
  const {logoUrl, domainUrl, timeAccessed, title, id} = eachSuggestion

  const onDeleteHistoryFunction = () => {
    deleteHistoryFunction(id)
  }

  return (
    <li>
      <div className="li-semi-container">
        <p className="time">{timeAccessed}</p>
        <img src={logoUrl} className="history-image" alt="domain logo" />
        <p>{title}</p>
        <p className="domainUrl">{domainUrl}</p>
      </div>
      <button data-testid="delete" onClick={onDeleteHistoryFunction}>
        <img
          alt="delete"
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
        />
      </button>
    </li>
  )
}

export default HistorySearchPage
