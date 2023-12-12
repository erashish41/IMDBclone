import React, { useContext } from 'react'
import { AppContext } from './context'

const Home = () => {
  const name = useContext(AppContext);

  return (
    <>
      <div>Home</div>
      <p>{name}</p>
    </>
  )
}

export default Home