import {Link} from 'react-router-dom'
import ReactFileReader from 'react-file-reader'
import {Component} from 'react'

import Header from '../Header'
import './index.css'

class Home extends Component {
  onChangeHandleFiles = files => {
    const reader = new FileReader()

    reader.onload = function (e) {
      console.log(reader.result)
    }
    reader.readAsText(files[0])
  }

  render() {
    return (
      <>
        <Header />

        <div className="home-container">
          <ReactFileReader>{this.onChangeHandleFiles}</ReactFileReader>

          <Link to="/products">
            <button type="button" className="shop-now-button">
              Display
            </button>
          </Link>
        </div>
      </>
    )
  }
}

export default Home
