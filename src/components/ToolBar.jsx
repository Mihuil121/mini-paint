import React from 'react'
import '../styles/toolbar.scss'
import toolState from '../store/toolState'
import Brush from '../tools/Brush'
import canvasState from '../store/canvasState'

const ToolBar = () => {
  return (
    <div className='toolbar'>
      <button className='toolbar__btn brush' onClick={()=>toolState.setTool(new Brush(canvasState.canvas))} />
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