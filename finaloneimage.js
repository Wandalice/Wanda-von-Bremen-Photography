const handleMouseMove = (event) => {
    const windowWidth = window.innerWidth
    const pageX = event ? event.pageX : 0
    console.log("WINDOW WIDTH", windowWidth)
    console.log("MOUSE X", pageX)
    const percentageX = pageX / windowWidth
    console.log("PERCENTAGE X", percentageX)

    const columnOneImages = Array.from(document.querySelectorAll(".container-1 .image-frame"))
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

    const columnTwoImages = Array.from(document.querySelectorAll(".container-2 .image-frame"))
    console.log("Column One Images", columnTwoImages)
    const numberOfColumnTwoImages = columnTwoImages.length
    console.log("#1", numberOfColumnTwoImages)


    const rightImageToShow = Math.floor(percentageX * numberOfColumnTwoImages)

    console.log("RIGHT IMAGE", rightImageToShow)

    columnTwoImages.map((currentImage, index) => {
        if (index === rightImageToShow) {
            currentImage.style.opacity = "1"
            currentImage.style.zIndex = "2"
        } else {
            currentImage.style.opacity = "0"
            currentImage.style.zIndex = "1"
        }
    })

// I tried to add another colum but i guess that doesnt work because of the right/left thing?

    // const columnTwoImages = Array.from(document.querySelectorAll(".container-3 .image-frame"))
    //console.log("Column One Images", columnThreeImages)
    //const numberOfColumnThreeImages = columnThreeImages.length
    //console.log("#1", numberOfColumnThreeImages)

    //const rightImageToShow = Math.floor(percentageX * numberOfColumnThreeImages)

    //console.log("RIGHT IMAGE", rightImageToShow)

    //columnTwoImages.map((currentImage, index) => {
      //  if (index === rightImageToShow) {
          //  currentImage.style.opacity = "1"
        //    currentImage.style.zIndex = "2"
    //  } else {
        //    currentImage.style.opacity = "0"
        //    currentImage.style.zIndex = "1"
      //  }
  //  })


}

handleMouseMove()

window.addEventListener("mousemove", handleMouseMove)
