import {Component} from 'react'

import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import Header from '../Header'
import DisplayCard from '../DisplayCard'

import './index.css'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Products extends Component {
  state = {
    postList: [],
    apiStatus: apiStatusConstants.initial,
  }

  componentDidMount() {
    this.getPost()
  }

  getPost = async () => {
    this.setState({
      apiStatus: apiStatusConstants.inProgress,
    })

    const jwtToken = Cookies.get('jwt_token')

<<<<<<< HEAD
    const apiUrl = 'https://financep-web.herokuapp.com/posts'
=======
    const apiUrl = 'https://apis.ccbp.in/prime-deals'
>>>>>>> 1509044efc85456d8d531ffbbeadf1eb8c5eedbe
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)
    if (response.ok === true) {
      const fetchedData = await response.json()
      const updatedData = fetchedData.prime_deals.map(product => ({
        userId: product.userId,
        id: product.id,
        title: product.title,
        body: product.body,
      }))
      this.setState({
        postList: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    } else if (response.status === 401) {
      this.setState({
        apiStatus: apiStatusConstants.failure,
      })
    }
  }

  renderPostList = () => {
    const {postList} = this.state
    return (
      <div>
        <Header />
<<<<<<< HEAD
        <h1 className="list-heading">Exclusive Prime Deals</h1>
=======
        <h1 className="primedeals-list-heading">Exclusive Prime Deals</h1>
>>>>>>> 1509044efc85456d8d531ffbbeadf1eb8c5eedbe
        <ul className="products-list">
          {postList.map(product => (
            <DisplayCard displayData={product} key={product.id} />
          ))}
        </ul>
      </div>
    )
  }

  renderFailureView = () => (
    <>
<<<<<<< HEAD
      <p className="list-heading">Not Found</p>
=======
      <p className="primedeals-list-heading">Not Found</p>
>>>>>>> 1509044efc85456d8d531ffbbeadf1eb8c5eedbe
    </>
  )

  renderLoadingView = () => (
    <div className="products-loader-container">
      <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
    </div>
  )

  render() {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderPostList()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      case apiStatusConstants.inProgress:
        return this.renderLoadingView()
      default:
        return null
    }
  }
}

export default Products
