import viteLogo from '/vite.svg'

import { Link } from 'react-router-dom'
import TextAnimation from './TextAnimation.jsx'
import { Editor } from './Editor.jsx'

const Home = () => {

  return (
    <div className=''>
      <Link to='/'>
        {/* <img src={viteLogo} alt="Website logo" /> */}
      </Link>
      {/* <h1 className='bg-gray'>TITLE</h1> */}
      {/* <Summarizer /> */}

      {/* <h2 className='text-4xl font-semibold '>Code Summarizer</h2> */}
      <TextAnimation text="Code Comprehension" />
      <Editor />


    </div>
  )
}

export default Home
