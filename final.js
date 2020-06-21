const handleMouseMove = (event) => {
    const windowWidth = window.innerWidth
    const pageX = event ? event.pageX : 0
    console.log("WINDOW WIDTH", windowWidth)
    console.log("MOUSE X", pageX)
    const percentageX = pageX / windowWidth
    console.log("PERCENTAGE X", percentageX)

    const columnOneImages = Array.from(document.querySelectorAll(".column-1 img"))
    const columnTwoImages = Array.from(document.querySelectorAll(".column-2 img"))
    console.log("Column One Images", columnOneImages)
    console.log("Column Two Images", columnTwoImages)
    const numberOfColumnOneImages = columnOneImages.length
    const numberOfColumnTwoImages = columnTwoImages.length
    console.log("#1", numberOfColumnOneImages)
    console.log("#2", numberOfColumnTwoImages)

    const leftImageToShow = Math.floor(percentageX * numberOfColumnOneImages)
    const rightImageToShow = Math.floor(percentageX * numberOfColumnTwoImages)
    console.log("LEFT IMAGE", leftImageToShow)
    console.log("RIGHT IMAGE", rightImageToShow)

    columnOneImages.map((currentImage, index) => {
        if (index === leftImageToShow) {
            currentImage.style.opacity = "1"
            currentImage.style.zIndex = "2"
        } else {
            currentImage.style.opacity = "0"
            currentImage.style.zIndex = "1"
        }
    })
    columnTwoImages.map((currentImage, index) => {
        if (index === rightImageToShow) {
            currentImage.style.opacity = "1"
            currentImage.style.zIndex = "2"
        } else {
            currentImage.style.opacity = "0"
            currentImage.style.zIndex = "1"
        }
    })
}
const opendrawer = (event) => {
document.querySelector("div.slideout").style.right="0px"
document.querySelector("div.hamburger").addEventListener("click",opendrawer)

}


handleMouseMove()

window.addEventListener("mousemove", handleMouseMove)
// Array.from(document.querySelectorAll(".home-gallery img")).map((image) => {
//     image.addEventListener("click", (event) => {
//         event.preventDefault()
//         console.log("IMAG", event.target.src)
//         document.querySelector("body").style.backgroundSize = 'cover'
//         document.querySelector("body").style.backgroundRepeat = 'no-repeat'
//         document.querySelector("body").style.backgroundImage = `url(${event.target.src})`
//     })
// })
