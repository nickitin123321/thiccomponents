const handleMouseDownDrag = ({e, coordinate: { left, top }, setCoordinate, limitation}) => {
  const { clientX, clientY } = e;
  const shiftX = clientX - left;
  const shiftY = clientY - top;
  const handleDrag = ({ pageX, pageY }) => {
    const draggedLeft = pageX - shiftX;
    const draggedTop = pageY - shiftY;
    if (limitation){
      const { start, x, y } = limitation;
      const limitedLeft = x ? draggedLeft: left;
      const limitedTop = y ? draggedTop: top;
      if(start.x < draggedLeft && draggedLeft - start.x < limitation.x){
        setCoordinate({left: limitedLeft, top: limitedTop});
      }
      if(start.y < draggedLeft && draggedLeft - start.y < limitation.y){
        setCoordinate({left: limitedLeft, top: limitedTop});
      }
    } else {
      setCoordinate({left: draggedLeft, top: draggedTop});
    }
  }

  document.addEventListener('mousemove', handleDrag);

  document.onmouseup = () => {
    document.removeEventListener('mousemove', handleDrag);
    document.onmouseup = null;
  }
}

export default handleMouseDownDrag;