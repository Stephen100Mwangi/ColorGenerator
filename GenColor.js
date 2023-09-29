const containerEl = document.querySelector(".container");
for (let index = 0; index < 30; index++) {
    const colorContainerEl = document.createElement("div");
    colorContainerEl.classList.add("colorContainer");
    containerEl.appendChild(colorContainerEl);
    
}
// Number of boxes are 30
//color codes
const colorContainerEls = document.querySelectorAll(".colorContainer");

generateColor();

function generateColor()
{
    colorContainerEls.forEach((colorContainerEl) => {
        const newColorCode = randomColor()
        colorContainerEl.style.backgroundColor = "#" + newColorCode;
        colorContainerEl.innerText = "#" + newColorCode;
    })
}

function randomColor()
{
    const chars ="0123456789abcdef"
    const colorCodeLength = 6;
    let colorCode = ""
    for (let index = 0; index < colorCodeLength; index++) {
        //Random number
        const randomNumber = Math.floor(Math.random() * chars.length);
        colorCode += chars.substring(randomNumber,randomNumber + 1);
        
    }
    return colorCode;

}