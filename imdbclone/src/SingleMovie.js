import React from 'react'
import { useParams } from 'react-router-dom'

  //The useParams is a hook provided by the React Router library (specifically, react-router-dom) that allows you to access the parameters from the current URL in a React component.

const SingleMovie = () => {
  const { id } = useParams ();
  return (
    <div>
        SingleMovie only {id}   
    </div>
    // {id} is used to fetch the data from URL as written
  )
}

export default SingleMovie
