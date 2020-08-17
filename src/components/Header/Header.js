import React from 'react'
import './Header.css'

function Header(props) {
  const { text='header', children, ...rest} = props
  return (
    <h2 className={`type ${text}`} {...rest}>
      { children }
    </h2>
  )
}

export default Header