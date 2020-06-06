const handleMouseMove = (event) => {
    const windowWidth = window.innerWidth
    const pageX = event ? event.pageX : 0
    console.log("WINDOW WIDTH", windowWidth)
    console.log("MOUSE X", pageX)
    const percentageX = pageX / windowWidth
    console.log("PERCENTAGE X", percentageX)

    const columnOneImages = Array.from(document.querySelectorAll(".col-4"))
    console.log("Column One Images", columnOneImages)
    const numberOfColumnOneImages = columnOneImages.length
    console.log("#1", numberOfColumnOneImages)
  

    const leftImageToShow = Math.floor(percentageX * numberOfColumnOneImages)

    console.log("LEFT IMAGE", leftImageToShow)

    columnOneImages.map((currentImage, index) => {
        if (index === leftImageToShow) {
            currentImage.style.opacity = "1"
            currentImage.style.zIndex = "2"
        } else {
            currentImage.style.opacity = "0"
            currentImage.style.zIndex = "1"
        }
    })


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
