import React from 'react'

function About() {
  return (
    <div>
      <h1 className='text-6xl mb-4'>Github Finder</h1>
      <p className='mb-4 text-2xl font-light'>
        A React app to search GitHub profiles and see profile details. 
      </p>
      <p className='text-lg text-gray-400'>
        Version: <span className='text-white'>1.0.0</span>
      </p>
      <p className='text-lg text-gray-400'>
        Created By: {" "}
        <a className='text-white' href='https://twitter.com/hassibmoddasser'>
          Swaniket Chowdhury
        </a>
      </p>
    </div>
  )
}

export default About