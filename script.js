const grid = document.querySelector('.gridContainer');
const input = document.querySelector('#size');
const resetButton = document.querySelector('.reset');
const pixel = document.querySelector("div");

//Create basic 16x16 grid
createGrid = () => {
    for(let i = 0; i < 256; i++) {
        const div = document.createElement('div');
        div.classList.add('pixel');
        grid.appendChild(div);
    }
 };


//Dynamically change size of grid with user input
changeSize = () => {
  grid.innerHTML = "";
  if (input.value <= 100){
    grid.style.setProperty(
      'grid-template-columns',
      `repeat(${input.value}, 1fr)`
    );
    grid.style.setProperty(
      'grid-template-rows',
      `repeat(${input.value}, 1fr)`
    );
    for(let i = 0; i < input.value * input.value; i++) {
     const div = document.createElement('div');
      div.classList.add('pixel');
      grid.appendChild(div);
    }
  }
  else {
    alert('Please enter a value from 1-100')
  }
   
console.log(input.value);

};
input.addEventListener('change', changeSize);

 //Paint grid when mouse hovers over each pixel
 pixel.addEventListener("mouseover", function(event) {
   event.target.classList.replace("pixel", "paint");
 });
 
//Reset everything to default
reset = () => {
  grid.innerHTML = "";
  input.value = "";
  grid.style.setProperty("grid-template-columns", `repeat(16, 1fr)`);
  grid.style.setProperty("grid-template-rows", `repeat(16, 1fr)`);
  createGrid();
}
resetButton.addEventListener('click', reset)

createGrid()
 



