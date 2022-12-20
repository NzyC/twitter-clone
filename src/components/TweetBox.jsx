import { Button, Avatar } from '@mui/material'
import React from 'react'
import "./TweetBox.css"

export default function TweetBox() {
  return (
    <div className='tweetBox'>
      <form>
        <div className="tweetBox__input">
          <Avatar src='' />
        </div>
        <Button>Tweet</Button>
      </form>
    </div>
  )
}
