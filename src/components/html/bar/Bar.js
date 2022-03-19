const Bar = ({
  onMouseDown,
  onDragStart,
  height = 20,
  width = 100,
  color = '#EAEAEA',
  borderWidth = 1,
  borderStyle = 'solid',
  borderColor = '#CECECE',
  position = 'absolute',
  top = 0,
  left = 0,
  zIndex,
}) =>
 <div
  className='bar'
  onMouseDown={onMouseDown}
  onDragStart={onDragStart}
  style = {
    {
      position,
      top,
      left,
      zIndex,
      height: height,
      width: width,
      background: color,
      border: `${borderWidth}px ${borderStyle} ${borderColor}`,
    }
  }
  >
 </div>

export default Bar
