import ReactFileReader from 'react-file-reader'

import Header from '../Header'

import './index.css'

const Home = () => {
  const handleFiles = files => {
    const reader = new FileReader()
    reader.onload = function (e) {
      console.log(reader.result)
    }
    reader.readAsText(files[0])
  }

  return (
    <>
      <Header />
      <div className="home-container">
        <h1>HOME</h1>
        <ReactFileReader fileTypes={['.json']} handleFiles={handleFiles}>
          <button className="btn">Upload</button>
        </ReactFileReader>
      </div>
    </>
  )
}

export default Home
