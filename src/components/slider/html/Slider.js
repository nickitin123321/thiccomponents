import { useState } from 'react';

import handleMouseDownDrag from '../../../events/drag'
import Circle from '../../html/circle';
import Bar from '../../html/bar';

import './style.css';

const Slider = () => {
  const [ coordinate, setCoordinate ] = useState({ left: 0, top: 170 });
  const { left, top } = coordinate;

 return (<div>
    <Circle
     isDraggable={true}
     zIndex={2}
     parentCoordinate={coordinate}
    />
    <Bar
     onMouseDown={(e) => handleMouseDownDrag({e, coordinate, setCoordinate})}
     onDragStart={() => false}
     height={10}
     width={200}
     zIndex={1}
     left={left}
     top={top}
    />
  </div>)
}

export default Slider