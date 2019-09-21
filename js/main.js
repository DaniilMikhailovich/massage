const cards = document.querySelectorAll('article');
for (let i = 0; i < cards.length; i++) {
    const card = cards[i];
    card.addEventListener('mousemove', startRotate);
    card.addEventListener('mouseout', stopRotate);
}
function startRotate(event){
    const cardItem = this.querySelector('.card-item');
    const halfHeight = cardItem.offsetHeight / 2;
    const halfWidth = cardItem.offsetWidth / 2;
    cardItem.style.transform = 'rotateX('+-(event.offsetY - halfHeight)/5+'deg) rotateY('+(event.offsetX - halfWidth)/5+'deg)';
}

function stopRotate(event){
    const cardItem = this.querySelector('.card-item');
    cardItem.style.transform = 'rotate(0)';
}