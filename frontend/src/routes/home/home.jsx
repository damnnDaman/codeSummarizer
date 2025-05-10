import viteLogo from '/vite.svg'

import { Link } from 'react-router-dom'
import Summarizer from '../../components/summarizer/summarizer.jsx' 

const Home = () => {

  return (
    <>
      <Link to='/'>
        <img src={viteLogo} alt="Website logo"/>
      </Link>
      <h1>TITLE</h1>
      <Summarizer/>
    </>
  )
}

export default Home
