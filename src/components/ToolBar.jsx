import React from 'react'
import '../styles/toolbar.scss'

const ToolBar = () => {
  return (
    <div className='toolbar'>
      <button className='toolbar__btn brush' />
      <button className='toolbar__btn last' />
      <button className='toolbar__btn Box' />
      <button className='toolbar__btn around' />
      <input type="color" />
      <button className='toolbar__btn left' />
      <button className='toolbar__btn right' />
      <button className='toolbar__btn save' />
    </div>
  )
}

export default ToolBar