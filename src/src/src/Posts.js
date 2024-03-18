import React from 'react'
import { useNavigate } from 'react-router-dom'
export default function Posts() {
  const Navigate = useNavigate()
  const goToFeeds = () => {
    Navigate('/')
  }
  return (
    <div>Post
      <button onClick={goToFeeds}>Go to Feeds</button>
    </div>
  )
}