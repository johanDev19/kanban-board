export const handleOnDrop = (e) => {
  e.preventDefault();
};

export const handleDragOver = (e) => {
  e.stopPropagation();
};