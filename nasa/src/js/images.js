
//More javaScipt =]
//The user will enter a date. Use that date to get the NASA picture of the day from that date! https://api.nasa.gov/
console.log("im here")
const url = "https://api.nasa.gov/planetary/apod?api_key=dEYbhs25eh5dOCaEkfoQtClK6UpJuUJL6sTP7FgT"
const button = document.querySelector("#button")
const input = document.querySelector("input")
const img = document.querySelector("#imggg")
const iframe = document.querySelector("#vidvid")
function getDate(){
  console.log("button action")
  fetch(url + "&date="+ input.value)
    .then(res => res.json())
    .then(data => {
      console.log(data); 
      if (data.media_type == "image") {
        img.src = data.url 
        iframe.src = ""
      } else{
        iframe.src = data.url 
        img.src = ""
      }
      


    })
    .catch(err => {
      console.log(`error ${err}`) 
    })
}
button.addEventListener ("click", getDate)

    