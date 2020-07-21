export const handleOnDrop = (e) => {
  e.preventDefault();

  const cards = document.querySelectorAll('[data-selected="true"]');

  if (cards.length === 0) {
    const cardId = e.dataTransfer.getData("card-reference");
    const card = document.getElementById(cardId);
    card.style.display = "block";

    return e.target.appendChild(card);
  }

  cards.forEach((card) => {
    card.style.display = "block";
    card.setAttribute('data-selected', "false")
    e.target.appendChild(card);
  });
};

export const handleDragOver = (e) => {
  e.stopPropagation();
};

export const handleDragStart = (e) => {
  if (document.querySelectorAll('[data-selected="true"]').length === 0) {
    const target = e.target;

    e.dataTransfer.setData(`card-reference`, target.id);
    setTimeout(() => {
      target.style.display = "none";
    }, 0);
  }

  document.querySelectorAll('[data-selected="true"]').forEach((element) => {
    e.dataTransfer.setData(`card-reference-id-${element.id}`, element.id);

    setTimeout(() => {
      element.style.display = "none";
    }, 0);
  });
};
