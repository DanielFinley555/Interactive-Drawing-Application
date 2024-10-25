//Task 1: Set Up the HTML Structure
//Done in HTML file



//Task 2: Configure the JavaScript for Drawing Context

const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d")

let width = canvas.width;
let height = canvas.height;

let opacity = 1;



//Task 3: Implement Shape Drawing Logic



//function for drawing line

//function for drawing rectangles


//creating a requirement for the user to have to click on circles to allow for drawing of circles
//using querySelector to bypass having to create a variable
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
