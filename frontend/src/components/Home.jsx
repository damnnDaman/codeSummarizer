// import viteLogo from '/vite.svg'
// import image from '../public/image.png'
// import { Link } from 'react-router-dom'
import TextAnimation from './TitleTextAnimation.jsx'
import TitleTextAnimation from './TitleTextAnimation.jsx'
import LanguagePicker from './LanguagePicker.jsx'
import { Editor } from './Editor.jsx'

const Home = () => {

  return (
    <div className=''>
      {/* <Link to='/'>
        <img src={image} alt="Website logo" />
      </Link> */}
      {/* <h1 className='bg-gray'>TITLE</h1> */}
      {/* <Summarizer /> */}

      {/* <h2 className='text-4xl font-semibold '>Code Summarizer</h2> */}
      <TitleTextAnimation text="Code Comprehension" />
      <LanguagePicker />
      <Editor />
    </div>
  )
}

export default Home
