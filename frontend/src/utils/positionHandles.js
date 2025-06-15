export const getHandleStyle = (totalHandles, index, spacing = 24) => {
  if (totalHandles === 1) {
    return {
      top: "50%",
      transform: "translateY(-50%)",
    };
  }
  
  const totalHeight = (totalHandles - 1) * spacing;
  const startOffset = `calc(50% - ${totalHeight / 2}px)`;

  return {
    top: `calc(${startOffset} + ${index * spacing}px)`,
  };
};