const boxes = document.querySelectorAll('.box1');
boxes.forEach(box=>{
    box.addEventListener('click', flipCard, false);
})

function flipCard(e){
    e.target.style.transform = 'rotateX(180deg)';
    e.target.style.boxShadow = '0 15px 15px rgba(0,0,0,0.75)';
    setTimeout(()=>{
        e.target.style.removeProperty('transform');
        e.target.style.removeProperty('box-shadow');
    }, 500);
}
