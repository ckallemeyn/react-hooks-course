import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

const styles = {
  content: {
    fontSize: '35px',
    position: 'absolute',
    left: '0',
    right: '0',
    marginTop: '20px',
    textAlign: 'center',
  }
}

const Loading = ({ speed = 300, text = 'Loading' }) => {
  const [content, setContent] = useState(text);

  useEffect(() => {
    const id = window.setInterval(() => {
      setContent((prevContent) => {
        return prevContent === `${text}...`
        ? text
        : `${prevContent}.`
      })
    }, speed)

    return () => window.clearInterval(id)
  }, [text, speed])

  return (
    <p style={styles.content}>
      {content}
    </p>
  )
}

export default Loading



Loading.propTypes = {
  text: PropTypes.string,
  speed: PropTypes.number,
}
