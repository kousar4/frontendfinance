import './index.css'

const DisplayCard = props => {
  const {displayData} = props
  const {userId, title, body} = displayData

  return (
    <li className="product-item">
      <h1 className="user-id">{userId}</h1>
      <p className="body">{body}</p>
      <h1 className="title">{title}</h1>
    </li>
  )
}
export default DisplayCard
