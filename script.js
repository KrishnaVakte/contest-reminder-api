let url = "https://kontests.net/api/v1/all"
let card=document.getElementById("c")

let p = fetch(url)
let b = p.then((response) => {
    return response.json()
}).then((contests) => {

    for (i in contests) {
        card.innerHTML = card.innerHTML + `<div class="card bg-black my-4 mx-4" style="width: 18rem;">
    <img class="contest-img card-img-top my-2" alt="contest">
    <div class="card-body">
      <h5 class="card-title">${contests[i].name}</h5>
      
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">Start Time : ${contests[i].start_time}</li>
      <li class="list-group-item">End Time : ${contests[i].end_time}</li>
      <li class="list-group-item">Duration : ${contests[i].duration}</li>
      <li class="list-group-item">In 24 Hour : ${contests[i].in_24_hours}</li>
      <li class="list-group-item">Status : ${contests[i].status}</li>
      </ul>
    <div class="card-body">
      <a href="${contests[i].url}" class="card-link btn btn-primary">${contests[i].site}</a>
    </div>
  </div>`
    }
}).then(
  (val)=>{
    let i=1
let newUrl ="https://api.unsplash.com/search/photos?query=coding&client_id=ORipQpzrfMtdV3xq9Y3K3cedQX0Uehg4g7XEDlJXA0U"

fetch(newUrl).then(
    (response)=>{
        return response.json()
    }
).then((img)=>{
    let a=document.querySelectorAll(".contest-img")
    for(let item of a){
      item.src=img.results[i%10].urls.regular
      i++;
    }
}
)
  }
)


