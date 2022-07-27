import { FaArrowRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <div className='hero'>
      <div className='text-center hero-content'>
        <div className='max-w-lg'>
          <h1 className='text-8xl font-bold mb-8'>404</h1>
          <p className='text-2xl mb-8'>There's nothing here.</p>
          <p className='text-5xl mb-8'>Find the user you are looking for in our app</p>
          <Link className='btn glass  btn-wide' to='/'>
            {/* <FaHome className='mr-2' /> */}
            Back to Home
            <FaArrowRight className='ml-2' />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default NotFound