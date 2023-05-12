// image carousel
const hideThis = document.querySelector("#hide-this")
const showThis = document.querySelector("#show-this")
let images = showThis.querySelectorAll("img")
let currentImage = 0

if (window.innerWidth <= "736") {
  images[currentImage].classList.add("opacity-100")
  setInterval(() => {
    hideThis.classList.add("hidden")
    showThis.classList.replace("hidden", "flex")
    if (showThis.classList.contains("flex")) {
      setTimeout(() => {
        showThis.classList.replace("h-14", "h-28")
        setTimeout(() => {
          images[currentImage].classList.remove("opacity-100")
          currentImage++

          if (currentImage >= images.length) {
            currentImage = 0
            hideThis.classList.remove("hidden")
            showThis.classList.replace("h-28", "h-14")
            showThis.classList.replace("flex", "hidden")
          }
          images[currentImage].classList.add("opacity-100")
        }, 3000)
        if (currentImage >= 0) {
          hideThis.classList.replace("h-28", "h-14")
        }
      }, 1)
    }
  }, 3000)
}

//pause vid
const example1 = document.getElementById("example-1")
const example2 = document.getElementById("example-2")
const example3 = document.getElementById("example-3")
const introvid = document.getElementById("intro-vid")
introvid.addEventListener("load", () => {
  console.log("loaded intro vid")
  introvid.contentDocument
    .getElementsByTagName("video")[0]
    .addEventListener("play", () => {
      stopVideo(
        example1.contentDocument.getElementsByTagName("video")[0],
        example2.contentDocument.getElementsByTagName("video")[0],
        example3.contentDocument.getElementsByTagName("video")[0]
      )
    })
})

example1.addEventListener("load", () => {
  console.log("loaded example 1")
  example1.contentDocument
    .getElementsByTagName("video")[0]
    .addEventListener("play", () => {
      stopVideo(
        introvid.contentDocument.getElementsByTagName("video")[0],
        example2.contentDocument.getElementsByTagName("video")[0],
        example3.contentDocument.getElementsByTagName("video")[0]
      )
    })
})
example2.addEventListener("load", () => {
  console.log("loaded example 2")
  example2.contentDocument
    .getElementsByTagName("video")[0]
    .addEventListener("play", () => {
      stopVideo(
        introvid.contentDocument.getElementsByTagName("video")[0],
        example1.contentDocument.getElementsByTagName("video")[0],
        example3.contentDocument.getElementsByTagName("video")[0]
      )
    })
})
example3.addEventListener("load", () => {
  console.log("loaded example 3")
  example3.contentDocument
    .getElementsByTagName("video")[0]
    .addEventListener("play", () => {
      stopVideo(
        example2.contentDocument.getElementsByTagName("video")[0],
        example1.contentDocument.getElementsByTagName("video")[0],
        introvid.contentDocument.getElementsByTagName("video")[0]
      )
    })
})

function stopVideo(...videos) {
  videos.forEach((video) => {
    video.plyr?.pause()
  })
}
