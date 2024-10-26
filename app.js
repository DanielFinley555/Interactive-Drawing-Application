//Task 1: Set Up the HTML Structure
//Done in HTML file



//Task 2: Configure the JavaScript for Drawing Context

const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d")

let width = canvas.width;
let height = canvas.height;

let opacity = 1;



//Task 3: Implement Shape Drawing Logic

//creating a requirement for the user to have to click on lines to allow for drawing of lines
//using querySelector to bypass having to create the variable again in the js file
document.querySelector("#lines").addEventListener("click", () =>{

//function for drawing line
function drawLine(x, y) {
    ctx.strokeStyle = `rgba(0,0, 255, ${opacity})`;
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(0, 0);
    ctx.stroke();
}
canvas.addEventListener("click", e => {
    drawLine(e.offsetX, e.offsetY)
});

})

//creating a requirement to click on rectangles
document.querySelector("#rectangles").addEventListener("click", () =>{

//function for drawing rectangles
function drawRectangle(x, y) {
    ctx.strokeStyle = `rgba(0,0, 255, ${opacity})`;
    ctx.beginPath();
    ctx.rect(x,y, 50,30);
    ctx.stroke();
}
canvas.addEventListener("click", e => {
    drawRectangle(e.offsetX, e.offsetY)
});

})

//creating a requirement to click on circles
document.querySelector("#circles").addEventListener("click", () =>{
    
//function for drawing circles
function drawCircle(x, y) {
    ctx.fillStyle = `rgba(0,0, 255, ${opacity})`;
    ctx.beginPath();
    ctx.arc(x, y, 10, 0, Math.PI*2, false);
    ctx.fill();
}
canvas.addEventListener("click", e => {
    drawCircle(e.offsetX, e.offsetY)
});

})



//Task 4: Add Color Selection and Canvas Clearing

//Using color input to set the drawing color



//Creating the clear event listener that clears the canvas
document.querySelector("#clear").addEventListener("click", () =>{
    ctx.clearRect(0,0, width, height);
});
