import { useState, useEffect } from 'react';
import handleMouseDownDrag from '../../../events/drag'
import './style.css'

const Circle = ({
  parentCoordinate,
  zIndex,
  size = 25,
  color = '#EAEAEA',
  borderWidth = 1,
  borderStyle = 'solid',
  borderColor = '#CECECE',
  position = 'absolute',
  isDraggable = false
}) => {
  const [ coordinate, setCoordinate ] = useState({ left: 0, top: 0 });
  const { left, top } = coordinate;
  const limitation = {start: {x: 0, y: 0 }, x: 180, y: 0};

  useEffect(() => {
    limitation.start.x = parentCoordinate.left;
    limitation.start.y = parentCoordinate.top;
    setCoordinate({left: parentCoordinate.left, top: parentCoordinate.top - 8})
  }, [parentCoordinate])

 return <div
  onMouseDown={isDraggable ? e => handleMouseDownDrag({e, coordinate, setCoordinate, limitation}) : undefined}
  onDragStart={() => false}
  className='circle'
  style = {
    {
      position,
      top,
      left,
      zIndex,
      height: size,
      width: size,
      background: color,
      border: `${borderWidth}px ${borderStyle} ${borderColor}`,
    }
  }
  >
 </div>
}

export default Circle
