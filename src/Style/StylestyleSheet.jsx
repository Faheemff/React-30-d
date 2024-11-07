// eslint-disable-next-line no-unused-vars
import React from 'react'

const StylestyleSheet = () => {

    const style = {
        color: 'red',
        backgroundColor: 'blue',
        '& h1': {
        }
    }
  return (
    <div>
        <div><h1 style={style}>Hello</h1></div>
    </div>
  )
}

export default StylestyleSheet
