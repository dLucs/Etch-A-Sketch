const grid = document.querySelector('.gridContainer');
const size = document.querySelector('#size');
const resetButton = document.querySelector('.reset');

createGrid = () => {
    for(let i = 0; i < 256; i++) {
        const div = document.createElement('div');
        div.classList.add('pixel');
        grid.appendChild(div);
    }
 }
 createGrid();

 const pixel = document.querySelector('pixel')
 paintGrid = () => {
    pixel.addEventListener('mouseover',function(){
        pixel.style.backgroundColor = 'grey';
    })
}

