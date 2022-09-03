import React from 'react'

const Answers = ({answers}) => {
  return (
    <div className='space-y-2'>
      <h2>People also ask</h2>
      {answers?.map((answer, i) => (

        <p key={i}>{answer}</p>

      ))
      }
    </div>
  )
}

export default Answers